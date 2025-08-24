# HEMANTH_S_KUMAR.portfolio

# Hemanth S Kumar - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as an Embedded Systems, IoT, and AI Engineer.

🌐 **Live Demo**: [Deployed on Cloudflare Pages](https://hemanth-s-kumar-portfolio.pages.dev/)

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Fully typed for better development experience and code reliability
- **Fast Performance**: Optimized with Vite for lightning-fast builds and hot reload
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Cloudflare Integration**: Optimized for Cloudflare Pages deployment with Workers integration

## Sections

- **Hero**: Professional introduction with animated elements
- **Skills**: Technical skills categorized by domain (Programming, Frameworks, Tools, etc.)
- **Projects**: Portfolio of notable projects with live demos and source code
- **Certifications**: Professional certifications and credentials with visual proof
- **Education**: Academic background and achievements
- **Contact**: Professional contact information and social links with Telegram integration

## Deployment on Cloudflare Pages

This portfolio is optimized for deployment on Cloudflare Pages with the following features:
- Automatic builds from Git repository
- Global CDN distribution
- Optimized caching headers
- SPA routing support
- Contact form integration with Cloudflare Workers

### Build Settings for Cloudflare Pages:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 18 or higher

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Cloudflare Pages
- **Backend**: Cloudflare Workers (for contact form)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation component
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Certifications.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Optimized images and lazy loading
- **Caching**: Proper cache headers for static assets
- **Bundle Size**: Tree shaking and dead code elimination
- **CDN**: Global distribution via Cloudflare network

## Contact Form Features

- **Telegram Integration**: Messages sent directly to Telegram
- **Rate Limiting**: Protection against spam via Cloudflare Workers
- **Validation**: Client and server-side validation
- **User Feedback**: Toast notifications for user actions

## Deployment Troubleshooting

### Common Cloudflare Pages Issues:

1. **Lockfile Conflicts**: This project uses npm exclusively. Bun lockfiles are ignored.
2. **Build Command**: Always use `npm run build` (not `yarn` or `bun`)
3. **Node Version**: Requires Node.js 18+ (specified in `.nvmrc` and `package.json`)
4. **Build Output**: The build outputs to `dist/` directory

### Environment Variables for Cloudflare:
- No environment variables required for basic deployment
- **For contact form functionality, add these in Cloudflare Pages settings:**
  - `TELEGRAM_BOT_TOKEN`: Your bot token from @BotFather
  - `TELEGRAM_CHAT_ID`: Your personal chat ID (from getUpdates API)

### Setting up Telegram Integration:

1. **Get your bot token** from @BotFather on Telegram
2. **Your chat ID** is: `6834626813` (from your message data)
3. **Add environment variables** in Cloudflare Pages:
   - Go to your Cloudflare Pages project settings
   - Navigate to "Environment variables"
   - Add `TELEGRAM_BOT_TOKEN` with your bot token
   - Add `TELEGRAM_CHAT_ID` with value `6834626813`
   - **Important**: Set these for "Production" environment

### Testing the Contact Form:
1. Deploy with environment variables set
2. Test the contact form on your live site
3. Check your Telegram for instant notifications

## License

This project is personal portfolio website. All rights reserved.

## Contact

Feel free to reach out for any questions or opportunities!
