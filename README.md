# Tumaini Jipya e.V. Website

**"New Hope"** - Official website for Tumaini Jipya humanitarian organization.

## About

Tumaini Jipya (Swahili for "New Hope") is a humanitarian non-profit organization based in Duisburg, Germany. Our mission is to provide humanitarian aid, support climate protection initiatives, and promote education for refugees.

### Mission Areas
- 🤝 **Humanitarian Aid** - Food, clothing, medicine, and shelter
- 🌱 **Climate Protection** - Sustainable projects and environmental initiatives
- 📚 **Education** - Language support and educational programs for refugees

## Tech Stack

- **Framework:** Nuxt 3 (Vue 3)
- **Styling:** TailwindCSS
- **Internationalization:** @nuxtjs/i18n (German, English, French)
- **Email Service:** Resend API
- **Deployment:** Netlify
- **Static Site Generation:** Nitro + Vite

## Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Jonathannd03/tumaini_jipya.git
cd tumaini_jipya

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env and add your Resend API key
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
```

Get your Resend API key from: https://resend.com/api-keys

See `EMAIL_SETUP.md` for detailed email configuration instructions.

## Project Structure

```
├── pages/              # File-based routing
├── components/
│   ├── global/         # Global layout components (Header, Footer)
│   └── ui/             # Reusable UI components
├── locales/            # i18n translation files (de, en, fr)
├── server/api/         # API endpoints
├── composables/        # Vue composables
├── assets/             # Global styles and assets
└── public/             # Static assets (images, etc.)
```

## Features

- ✅ Fully responsive design
- ✅ Multi-language support (German, English, French)
- ✅ Contact form with email integration
- ✅ Client-side form validation
- ✅ Static site generation for optimal performance
- ✅ SEO optimized
- ✅ Accessibility compliant

## Documentation

- `CLAUDE.md` - Comprehensive codebase documentation for development
- `EMAIL_SETUP.md` - Email service configuration guide
- `.env.example` - Environment variables template

## Deployment

The site is deployed on Netlify. Deployment is automatic on push to the main branch.

### Manual Deployment

```bash
# Build for production
npm run generate

# Deploy .output/public directory
```

### Netlify Configuration

Set environment variables in Netlify dashboard:
- `RESEND_API_KEY` - Your Resend API key

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Copyright © 2024 Tumaini Jipya e.V. All rights reserved.

## Contact

- **Website:** [www.tumaini-jipya.org](https://www.tumaini-jipya.org)
- **Email:** kontakt@tumaini-jipya.org
- **Instagram:** [@tumaini_jipya_e.v](https://www.instagram.com/tumaini_jipya_e.v)
- **Location:** Duisburg, Germany

---

Built with ❤️ by the Tumaini Jipya team
