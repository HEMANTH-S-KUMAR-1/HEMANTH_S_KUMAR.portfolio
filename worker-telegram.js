// Enhanced Cloudflare Worker with Telegram Integration
// Deploy this to handle contact form submissions and send to Telegram

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function sendToTelegram(formData, env) {
  const botToken = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;
  
  if (!botToken || !chatId) {
    console.log('Telegram credentials not configured');
    return false;
  }

  const message = `
🚀 *New Portfolio Contact Message*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
${formData.purpose ? `🎯 *Purpose:* ${formData.purpose}` : ''}
${formData.subject ? `📝 *Subject:* ${formData.subject}` : ''}

💬 *Message:*
${formData.message}

⏰ *Received:* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST
  `;

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    const telegramResult = await telegramResponse.json();
    
    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramResult);
      return false;
    }

    console.log('Message sent to Telegram successfully');
    return true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

async function handleContactForm(request, env) {
  try {
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      });
    }

    // Honeypot spam protection
    if (formData.website && formData.website.trim() !== '') {
      return new Response(JSON.stringify({
        success: false,
        error: 'Spam detected'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid email address'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      });
    }

    // Rate limiting using KV (if you have KV namespace set up)
    if (env.CONTACT_FORM_KV) {
      const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
      const rateLimitKey = `rate_limit:${clientIP}`;
      const currentCount = await env.CONTACT_FORM_KV.get(rateLimitKey);
      
      if (currentCount && parseInt(currentCount) >= 5) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Rate limit exceeded. Please try again later.'
        }), {
          status: 429,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
        });
      }

      // Increment counter (expires in 1 hour)
      await env.CONTACT_FORM_KV.put(rateLimitKey, String((parseInt(currentCount) || 0) + 1), {
        expirationTtl: 3600
      });
    }

    // Send to Telegram
    const telegramSent = await sendToTelegram(formData, env);
    
    // Store in KV for backup (optional)
    if (env.CONTACT_FORM_KV) {
      const submissionId = `submission:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      await env.CONTACT_FORM_KV.put(submissionId, JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        telegramSent: telegramSent
      }));
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully',
      telegramDelivered: telegramSent
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
    });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: CORS_HEADERS
      });
    }

    // Handle contact form submission
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContactForm(request, env);
    }

    // Handle root path
    if (url.pathname === '/') {
      return new Response('Hemanth Portfolio Contact API - Working! 🚀', {
        headers: { 'Content-Type': 'text/plain', ...CORS_HEADERS }
      });
    }

    // 404 for other paths
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain', ...CORS_HEADERS }
    });
  },
};
