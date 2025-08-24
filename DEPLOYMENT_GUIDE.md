# Cloudflare Workers Deployment with Telegram Integration

## Prerequisites
- Cloudflare account
- Node.js installed
- Your Telegram bot token and chat ID

## Step 1: Install Wrangler CLI
```bash
npm install -g wrangler
```

## Step 2: Login to Cloudflare
```bash
wrangler login
```

## Step 3: Create wrangler.toml
Create a `wrangler.toml` file in your project root:

```toml
name = "hemanth-portfolio-contact"
main = "worker-telegram.js"
compatibility_date = "2023-12-01"

[env.production]
name = "hemanth-portfolio-contact"

# Optional: KV namespace for rate limiting and storage
# [[env.production.kv_namespaces]]
# binding = "CONTACT_FORM_KV"
# id = "your-kv-namespace-id"

[vars]
# Public variables (non-sensitive)
ENVIRONMENT = "production"
```

## Step 4: Set Environment Variables
```bash
# Set your Telegram bot token (keep this secret!)
wrangler secret put TELEGRAM_BOT_TOKEN

# Set your Telegram chat ID
wrangler secret put TELEGRAM_CHAT_ID
```

## Step 5: Deploy
```bash
wrangler deploy worker-telegram.js
```

## Step 6: Update Your Vite Config
Update your `vite.config.ts` to proxy API calls in development:

```typescript
export default defineConfig(({ command }) => ({
  base: command === 'build' ? "/HEMANTH_S_KUMAR.portfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://your-worker-name.your-subdomain.workers.dev',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  // ... rest of config
}));
```

## Testing

1. **Test the worker directly**:
   ```
   https://your-worker-name.your-subdomain.workers.dev/
   ```

2. **Test contact form**:
   - Fill out your contact form
   - Check your Telegram for the message

3. **Test Telegram API directly**:
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage?chat_id=YOUR_CHAT_ID&text=Test
   ```

## Troubleshooting

- **Messages not arriving**: Check bot token and chat ID
- **CORS errors**: Ensure your worker includes CORS headers
- **Rate limiting**: Implement rate limiting to prevent spam
- **Error logs**: Check Cloudflare Workers logs in the dashboard
