// Quick setup script for Telegram integration
// Run this in Node.js or browser console to help set up your environment

const BOT_TOKEN_PLACEHOLDER = 'your_bot_token_here';
const CHAT_ID = '6834626813'; // Your chat ID from earlier

console.log(`
🤖 TELEGRAM BOT SETUP GUIDE
===========================

1. GET YOUR BOT TOKEN:
   - Message @BotFather on Telegram
   - Send: /newbot (or /mybots if you already have one)
   - Copy your bot token (looks like: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)

2. FOR LOCALHOST DEVELOPMENT:
   - Create a file called .env.local in your project root
   - Add this line:
     VITE_TELEGRAM_BOT_TOKEN=your_actual_bot_token_here

3. FOR CLOUDFLARE PAGES PRODUCTION:
   - Go to your Cloudflare Pages dashboard
   - Navigate to Settings > Environment variables
   - Add variable: VITE_TELEGRAM_BOT_TOKEN
   - Value: your_actual_bot_token_here
   - Environment: Production

4. TEST YOUR SETUP:
   - Your chat ID is: ${CHAT_ID}
   - Test URL: https://api.telegram.org/bot<YOUR_TOKEN>/sendMessage
   - Test data: {"chat_id":"${CHAT_ID}","text":"🧪 Test message"}

📋 Quick Test Function (paste your bot token and run):
`);

function testTelegram(botToken) {
  if (!botToken || botToken === BOT_TOKEN_PLACEHOLDER) {
    console.error('❌ Please provide your actual bot token!');
    return;
  }

  const testMessage = {
    chat_id: CHAT_ID,
    text: `🧪 Test message from setup script
⏰ Sent at: ${new Date().toLocaleString()}
✅ If you see this, your bot is working!`
  };

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testMessage)
  })
  .then(response => response.json())
  .then(result => {
    if (result.ok) {
      console.log('✅ SUCCESS! Check your Telegram for the test message.');
      console.log('Now add this to your .env.local file:');
      console.log(`VITE_TELEGRAM_BOT_TOKEN=${botToken}`);
    } else {
      console.error('❌ ERROR:', result.description);
    }
  })
  .catch(error => {
    console.error('❌ Network error:', error);
  });
}

console.log(`
Usage: testTelegram('your_bot_token_here')
Example: testTelegram('123456789:ABCdefGHIjklMNOpqrsTUVwxyz')
`);

// Export for use
if (typeof module !== 'undefined') {
  module.exports = { testTelegram, CHAT_ID };
}
