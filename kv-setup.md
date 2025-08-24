# Cloudflare KV Setup for Contact Form

This document explains how to set up Cloudflare KV storage for the contact form functionality.

## Prerequisites

- Cloudflare account
- Cloudflare Workers enabled
- Domain configured with Cloudflare

## Setup Steps

### 1. Create KV Namespace

1. Log in to your Cloudflare dashboard
2. Navigate to **Workers & Pages** > **KV**
3. Click **Create a namespace**
4. Name it `CONTACT_FORM_KV` (or any name you prefer)
5. Click **Add**

### 2. Bind KV Namespace to Worker

1. Go to **Workers & Pages** > **Overview**
2. Click on your worker (or create a new one)
3. Go to **Settings** > **Variables**
4. Under **KV Namespace Bindings**, click **Add binding**
5. Set:
   - **Variable name**: `CONTACT_KV`
   - **KV namespace**: Select the namespace you created
6. Click **Save**

### 3. Deploy Worker

1. Copy the contents of `worker.js` to your Cloudflare Worker
2. Click **Save and Deploy**

### 4. Configure Custom Domain (Optional)

1. Go to **Workers & Pages** > **Overview**
2. Click on your worker
3. Go to **Triggers** > **Custom Domains**
4. Click **Add Custom Domain**
5. Enter your domain (e.g., `api.yourdomain.com`)

## Environment Variables

The worker uses the following KV binding:

- `CONTACT_KV`: Main KV namespace for storing form submissions and rate limiting

## Rate Limiting

The worker implements rate limiting:
- **Window**: 1 hour
- **Max requests**: 5 per IP address
- **Storage**: Automatic cleanup after window expires

## Data Storage

Form submissions are stored with:
- **Key format**: `submission:{timestamp}:{random_id}`
- **TTL**: 30 days (automatic cleanup)
- **Data includes**: Form fields, timestamp, IP, User-Agent

## Security Features

1. **CORS protection**: Only allows specified origins
2. **Rate limiting**: Prevents spam and abuse
3. **Honeypot field**: Detects bot submissions
4. **Input validation**: Validates email format and required fields
5. **Data sanitization**: Prevents injection attacks

## Testing

Test the worker with:

```bash
curl -X POST https://your-worker-domain.com/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Monitoring

Monitor your worker in the Cloudflare dashboard:
1. Go to **Workers & Pages** > **Overview**
2. Click on your worker
3. View **Metrics** and **Logs** tabs

## Troubleshooting

### Common Issues

1. **KV binding not found**: Ensure the binding name matches exactly
2. **CORS errors**: Check allowed origins in worker code
3. **Rate limiting**: Wait for the rate limit window to reset
4. **Validation errors**: Ensure all required fields are provided

### Debug Mode

Add console.log statements to the worker for debugging:

```javascript
console.log('Form data:', formData);
console.log('Rate limit check:', currentCount);
```

View logs in the Cloudflare dashboard under **Workers & Pages** > **Your Worker** > **Logs**.