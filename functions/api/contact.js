// Cloudflare Pages Function for contact form
// This file should be in functions/api/contact.js

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

// Rate limiting function
async function isRateLimited(request, env) {
  // Simple IP-based rate limiting (you can enhance this)
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = `rate_limit:${clientIP}`;
  
  // For now, we'll skip complex rate limiting and just validate
  return false;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: CORS_HEADERS
      });
    }

    // Check rate limiting
    if (await isRateLimited(request, env)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Too many requests. Please try again later.'
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS
        }
      });
    }

    // Parse form data
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS
        }
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
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS
        }
      });
    }

    // Spam protection - check for honeypot field
    if (formData.website && formData.website.trim() !== '') {
      return new Response(JSON.stringify({
        success: false,
        error: 'Spam detected'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS
        }
      });
    }

    // Send to Telegram
    const telegramSent = await sendToTelegram(formData, env);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully',
      telegramDelivered: telegramSent
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS
      }
    });
  }
}

export async function onRequestOptions(context) {
  return new Response(null, {
    headers: CORS_HEADERS
  });
}
