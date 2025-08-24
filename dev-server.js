// Development server for testing contact form locally
// Run this alongside your Vite dev server to test contact form

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Your actual Telegram credentials for testing
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // Replace with your actual bot token
const TELEGRAM_CHAT_ID = '6834626813'; // Your chat ID

async function sendToTelegram(formData) {
  if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
    console.log('⚠️  Telegram bot token not configured. Set TELEGRAM_BOT_TOKEN in dev-server.js');
    return false;
  }

  const message = `
🚀 *New Portfolio Contact Message (DEV)*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
${formData.purpose ? `🎯 *Purpose:* ${formData.purpose}` : ''}
${formData.subject ? `📝 *Subject:* ${formData.subject}` : ''}

💬 *Message:*
${formData.message}

⏰ *Received:* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST
🔧 *Source:* Development Server
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API error:', result);
      return false;
    }

    console.log('✅ Message sent to Telegram successfully');
    return true;
  } catch (error) {
    console.error('❌ Error sending to Telegram:', error);
    return false;
  }
}

app.post('/api/contact', async (req, res) => {
  console.log('📝 Contact form submission received:', req.body);
  
  try {
    const formData = req.body;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Send to Telegram
    const telegramSent = await sendToTelegram(formData);
    
    res.json({
      success: true,
      message: 'Message sent successfully',
      telegramDelivered: telegramSent,
      environment: 'development'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log('📋 Instructions:');
  console.log('1. Replace TELEGRAM_BOT_TOKEN with your actual bot token');
  console.log('2. Update vite.config.ts proxy to point to this server');
  console.log('3. Test your contact form!');
});

export default app;
