# Telegram Bot Integration Setup

## Step 1: Create a Telegram Bot

1. **Start a chat with BotFather**:
   - Open Telegram and search for `@BotFather`
   - Send `/start` to begin

2. **Create a new bot**:
   - Send `/newbot`
   - Choose a name for your bot (e.g., "Hemanth Portfolio Contact")
   - Choose a username ending in "bot" (e.g., "hemanth_portfolio_contact_bot")

3. **Save your bot token**:
   - BotFather will give you a token like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`
   - **Keep this token secure!**

## Step 2: Get Your Chat ID

1. **Start a chat with your bot**:
   - Click the link BotFather provides or search for your bot username
   - Send `/start` to your bot

2. **Get your chat ID**:
   - Visit this URL in your browser (replace YOUR_BOT_TOKEN with your actual token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
   - Look for the "chat" object and note the "id" number (e.g., 123456789)
   - This is your chat ID

## Step 3: Environment Variables

Add these to your deployment environment (Cloudflare Workers, Vercel, etc.):

```
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

## Step 4: Test Your Bot

You can test sending messages to your Telegram using this URL:
```
https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage?chat_id=YOUR_CHAT_ID&text=Test message from portfolio!
```

## Security Notes

- Never commit your bot token to Git
- Use environment variables for sensitive data
- Consider rate limiting to prevent spam
- The bot token gives full access to your bot, so keep it secure
