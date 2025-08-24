// Test your Telegram bot setup
// Run this in the browser console to test your bot

async function testTelegramBot() {
  const botToken = 'YOUR_BOT_TOKEN_HERE'; // Replace with your actual bot token
  const chatId = '6834626813'; // Your chat ID from the earlier message
  
  const message = `
🧪 *Test Message from Portfolio*
This is a test message to verify the Telegram integration is working.
⏰ *Sent at:* ${new Date().toLocaleString()}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();
    console.log('Telegram API Response:', result);
    
    if (result.ok) {
      console.log('✅ Message sent successfully!');
    } else {
      console.error('❌ Error:', result.description);
    }
  } catch (error) {
    console.error('❌ Network error:', error);
  }
}

// Usage: Replace YOUR_BOT_TOKEN_HERE with your actual bot token and run testTelegramBot()
console.log('Copy your bot token from @BotFather and replace YOUR_BOT_TOKEN_HERE, then run testTelegramBot()');
