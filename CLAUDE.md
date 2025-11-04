# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Tumaini Jipya** (Swahili for "New Hope") is a humanitarian non-profit organization website built with Nuxt 3. The site is in German and promotes humanitarian aid, climate protection, and education initiatives.

- **Organization Location:** Duisburg, Germany
- **Mission Areas:** Humanitarian aid, climate protection, education for refugees
- **Target Deployment:** Static site (SSR disabled)

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Framework:** Nuxt 3 (Vue 3)
- **Styling:** TailwindCSS with custom theme
- **Rendering:** Static site generation (SSR disabled)
- **Internationalization:** @nuxtjs/i18n (German, English, French)
- **Email Service:** Resend API
- **Font:** Inter (Google Fonts)
- **Icons:** Font Awesome 6 + inline SVG icons
- **Deployment:** Vercel

### Project Structure

```
├── pages/              # File-based routing
│   ├── index.vue       # Home page (Hero, Mission, CTA)
│   ├── about-us.vue    # About page
│   ├── projects.vue    # Projects overview
│   ├── team.vue        # Team page
│   ├── contact.vue     # Contact page
│   ├── donate.vue      # Donation page
│   ├── membership.vue  # Membership page
│   ├── impressium.vue  # Legal notice (German requirement)
│   └── blog/           # Blog pages
├── components/
│   ├── global/         # Auto-imported global components
│   │   ├── Header.vue  # Navigation with mobile menu
│   │   ├── Footer.vue  # Site footer
│   │   └── hero.vue    # Homepage hero section
│   ├── ui/             # Reusable UI components
│   │   └── Custom-Button.vue  # Button component with variants
│   ├── mission.vue     # Mission cards section
│   └── CalltoAction.vue # CTA component
├── layouts/
│   └── default.vue     # Standard layout (Header + Content + Footer)
├── sections/           # Large content sections
│   ├── HeroSection.vue
│   └── ContactForm.vue
├── composables/        # Vue composables
│   ├── ui.ts
│   └── useConstants.ts # Centralized constants (ORGANIZATION, NAVIGATION_LINKS, etc.)
├── locales/            # i18n translation files
│   ├── de.ts           # German translations
│   ├── en.ts           # English translations
│   └── fr.ts           # French translations
├── server/             # Server-side API endpoints
│   └── api/
│       └── contact.post.ts  # Contact form email handler
├── stores/             # State management (if needed)
└── assets/css/         # Global styles
```

### Component Architecture

**Auto-Import Pattern:** Nuxt 3 auto-imports components from the `components/` directory. Components in `components/global/` are available everywhere without explicit imports.

**Component Naming:**
- Global layout components: PascalCase (e.g., `Header.vue`, `Footer.vue`)
- Feature components: lowercase with dash (e.g., `hero.vue`, `mission.vue`)
- UI components: PascalCase with prefix (e.g., `Custom-Button.vue`)

**Layout System:**
- All pages use the `default.vue` layout automatically
- Layout structure: `Header → <slot /> → Footer`
- Header includes responsive navigation with mobile menu toggle

### Routing

File-based routing via Nuxt 3:
- `/` → `pages/index.vue`
- `/about-us` → `pages/about-us.vue`
- `/projects` → `pages/projects.vue`
- `/membership` → `pages/membership.vue`
- `/donate` → `pages/donate.vue`
- `/contact` → `pages/contact.vue`
- `/impressium` → `pages/impressium.vue`

Navigation links are defined in `components/global/Header.vue` in the `navLinks` array.

### Styling Conventions

**TailwindCSS Theme Extensions:**
```js
colors: {
  primary: { 50, 500, 600, 700 } // Blue shades
  secondary: { 500, 600 }         // Purple shades
}
// Main brand color: teal-600
```

**Responsive Design:**
- Mobile-first approach with breakpoints: `sm:`, `md:`, `lg:`
- Mobile menu toggles at `lg` breakpoint (1024px)
- Consistent spacing scales: `py-12 sm:py-16 lg:py-20`

**Design Patterns:**
- Gradient backgrounds: `bg-gradient-to-br from-teal-500 to-emerald-600`
- Decorative blur circles: Absolute positioned with `blur-3xl` and low opacity
- Card hover effects: `hover:shadow-2xl hover:-translate-y-2`
- Smooth transitions: `transition-all duration-300`

### State Management

**Current Implementation:**
- Local component state using Vue 3 Composition API (`ref`, `computed`)
- No global store currently in use
- Mobile menu state managed in `Header.vue` component

**Example from Header.vue:**
```js
const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
```

### Page Content Structure

Pages typically follow this pattern:
1. **Hero/Header Section** - Title, description, decorative elements
2. **Content Sections** - Feature cards, information blocks
3. **Call-to-Action** - Donation or membership prompts

**Common Section Elements:**
- Badge tags: `px-4 py-2 bg-teal-100 text-teal-700 rounded-full`
- Section titles: `text-3xl sm:text-4xl lg:text-5xl font-bold`
- Feature cards with gradient icons
- Decorative background blur circles

## Key Configuration

**nuxt.config.ts:**
- SSR disabled (`ssr: false`) for static deployment
- TailwindCSS module configured
- i18n module with 3 languages (de, en, fr)
- i18n strategy: `no_prefix` with cookie-based persistence
- Runtime config for Resend API key
- Custom head meta for SEO (German keywords)
- Logo path: `/images/logo.png`

**.env Configuration:**
- `RESEND_API_KEY` - Email service API key (required for contact form)
- See `.env.example` for template

**netlify.toml:**
- Build command: `npm run generate`
- Publish directory: `.output/public`
- Node version: 20
- Environment: Node memory limit, npm flags for optional dependencies
- SPA redirects configured
- Security and caching headers

**Color Scheme:**
- Primary brand: Teal/Emerald (`teal-600`, `emerald-600`)
- Humanitarian: Red/Pink gradient
- Climate: Green/Emerald gradient
- Education: Blue/Indigo gradient

## Internationalization (i18n)

The website supports three languages:
- **German (de)** - Default language
- **English (en)**
- **French (fr)**

**Implementation:**
- Language switcher in header (desktop and mobile)
- Cookie-based language persistence (`i18n_locale`)
- All content uses translation keys with `$t()` function
- Translation files in `locales/` directory

**Usage Example:**
```vue
<h1>{{ $t('home.title') }}</h1>
<p>{{ $t('home.description') }}</p>
```

**Component Naming:**
- Language switcher: `<UiLanguageSwitcher />` (auto-imported from `components/ui/LanguageSwitcher.vue`)

## Content Guidelines

**Languages:** Content available in German, English, and French. Maintain language conventions:
- Formal address when appropriate
- Compound words (e.g., "Klimaschutz", "Bildungsförderung")
- Proper use of umlauts (ä, ö, ü) and ß

**Mission Areas:**
1. **Humanitäre Hilfe** - Food, clothing, medicine, shelter
2. **Klimaschutz** - Climate-friendly projects, tree planting, solar installations
3. **Bildungsförderung** - Education projects, language support for refugee children

**Brand Values:**
- Transparency (Transparenz)
- Sustainability (Nachhaltigkeit)
- Tolerance & Respect (Toleranz & Respekt)

## Development Notes

### When Adding New Pages:
1. Create `.vue` file in `pages/` directory
2. Add route to `navLinks` array in `Header.vue` if needed
3. Follow existing responsive design patterns
4. Include decorative background elements for visual consistency
5. Use semantic HTML with proper heading hierarchy

### When Creating Components:
1. Use Vue 3 Composition API (`<script setup>`)
2. Follow the naming convention based on component location
3. Include responsive classes for all screen sizes
4. Emit events for parent communication when needed
5. Use computed properties for conditional styling

### Mobile-First Responsive Design:
Always provide mobile, tablet, and desktop variants:
```vue
<!-- Text sizing -->
text-base sm:text-lg lg:text-xl

<!-- Spacing -->
py-12 sm:py-16 lg:py-20

<!-- Grid layouts -->
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### SVG Icons:
Inline SVG icons are preferred over Font Awesome for custom styling. Use Heroicons-style SVGs with stroke-based designs for consistency.

## Contact Form & Email Functionality

The contact form (`pages/contact.vue`) includes:
- **Client-side validation** with real-time error messages
- **Server-side email sending** via Resend API
- **Form fields:** Name, Email, Phone (optional), Subject, Message, Privacy checkbox
- **Validation rules:**
  - Name: Required, min 2 characters
  - Email: Required, valid email format
  - Subject: Required selection
  - Message: Required, min 10 characters
  - Privacy: Must be checked

**API Endpoint:** `server/api/contact.post.ts`
- Validates form data
- Sends email to: ndingajonathan96@gmail.com
- Uses Resend service
- Returns success/error response

**Setup Required:**
1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Get API key from dashboard
3. Add to `.env`: `RESEND_API_KEY=re_xxxxx`
4. For production: Add to Vercel environment variables

See `EMAIL_SETUP.md` for detailed setup instructions.

## Centralized Constants

**Location:** `composables/useConstants.ts`

Provides:
- `ORGANIZATION` - Organization details (name, fullName, logoPath)
- `NAVIGATION_LINKS` - Site navigation links
- `MISSION_AREAS` - Mission cards data
- `CONTACT_INFO` - Contact information
- `SOCIAL_LINKS` - Social media links

**Usage:**
```js
const { ORGANIZATION, NAVIGATION_LINKS } = useConstants();
```

**Note:** Use these constants instead of hardcoding values. In templates, refs are auto-unwrapped (no `.value` needed).

## Deployment (Vercel)

**Configuration Files:**
- `vercel.json` - Build settings and output directory
- `.npmrc` - npm configuration (legacy-peer-deps)
- `package.json` - Build scripts

**Environment Variables (Vercel Dashboard):**
- `RESEND_API_KEY` - Email service API key
- Go to: Project Settings → Environment Variables → Add

**Deployment Process:**
1. Push to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Vercel auto-deploys on push to main branch

**Build Configuration:**
- Build command: `npm run generate`
- Output directory: `dist`
- Framework preset: Nuxt.js

**Manual Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel
```

## Important Paths

- Logo: `/images/logo.png` (moved to `public/images/logo.png`)
- Global styles: `~/assets/css/main.css`
- Font imports: Google Fonts (Inter) and Font Awesome CDN (configured in `nuxt.config.ts`)
- Translation files: `locales/*.ts`
- Environment template: `.env.example`
- Email setup docs: `EMAIL_SETUP.md`
