/**
 * Cloudflare Worker for Contact Form
 * Handles form submissions with rate limiting and spam protection
 */

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60; // 1 hour in seconds
const RATE_LIMIT_MAX_REQUESTS = 5; // Max requests per window

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      // Get client IP for rate limiting
      const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
      
      // Check rate limit
      const rateLimitKey = `rate_limit:${clientIP}`;
      const currentCount = await env.CONTACT_KV.get(rateLimitKey);
      
      if (currentCount && parseInt(currentCount) >= RATE_LIMIT_MAX_REQUESTS) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
        }), {
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
      }

      // Parse form data
      const formData = await request.json();
      
      // Validate required fields
      if (!formData.name || !formData.email || !formData.message) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Missing required fields',
        }), {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
      }

      // Honeypot spam protection
      if (formData.website) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Spam detected',
        }), {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Invalid email address',
        }), {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        });
      }

      // Store form submission
      const submissionId = `submission:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        ip: clientIP,
        userAgent: request.headers.get('User-Agent'),
      };

      // Store with 30-day TTL
      await env.CONTACT_KV.put(submissionId, JSON.stringify(submissionData), {
        expirationTtl: 30 * 24 * 60 * 60, // 30 days
      });

      // Update rate limit counter
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
      await env.CONTACT_KV.put(rateLimitKey, newCount.toString(), {
        expirationTtl: RATE_LIMIT_WINDOW,
      });

      // Return success response
      return new Response(JSON.stringify({
        success: true,
        message: 'Message sent successfully',
      }), {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      console.error('Contact form error:', error);
      
      return new Response(JSON.stringify({
        success: false,
        error: 'Internal server error',
      }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }
  },
};