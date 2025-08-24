// Test script to verify Telegram bot integration
// Run this with: node test-telegram.js

const TELEGRAM_BOT_TOKEN = '8266994639:AAEd93HKNvKDAj8Argl5vpczSenr-EbSrj4';
const TELEGRAM_CHAT_ID = '6834626813';

async function testTelegramBot() {
  console.log('🚀 Testing Telegram Bot Integration...\n');

  // Test message
  const message = `
🧪 *Test Message from Portfolio*

👤 *Name:* John Doe
📧 *Email:* john.doe@example.com
🎯 *Purpose:* Job Opportunity
📝 *Subject:* Frontend Developer Position

💬 *Message:*
Hi Hemanth! I came across your portfolio and I'm impressed with your work. We have an exciting opportunity for a Frontend Developer role. Would you be interested in discussing this further?

⏰ *Received:* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST
  `;

  try {
    console.log('📤 Sending test message to Telegram...');
    
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
    
    if (response.ok) {
      console.log('✅ Success! Message sent to Telegram');
      console.log('📱 Check your Telegram for the test message');
      console.log('\n🔧 Integration is working correctly!');
    } else {
      console.error('❌ Error:', result);
      console.log('\n🔍 Please check:');
      console.log('- Bot token is correct');
      console.log('- Chat ID is correct');
      console.log('- You have sent /start to your bot');
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
    console.log('\n🔍 Please check your internet connection');
  }
}

// Instructions
console.log('📋 Before running this test:');
console.log('1. Replace YOUR_BOT_TOKEN_HERE with your actual bot token');
console.log('2. Replace YOUR_CHAT_ID_HERE with your actual chat ID');
console.log('3. Make sure you\'ve sent /start to your bot\n');

if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
  console.log('⚠️  Please update the bot token and chat ID first!');
} else {
  testTelegramBot();
}
