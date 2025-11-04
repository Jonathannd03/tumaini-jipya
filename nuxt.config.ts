// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: "2025-09-12",
  ssr: false,
  target: "static",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],

  runtimeConfig: {
    // Private keys that are only available on the server
    resendApiKey: process.env.RESEND_API_KEY,
  },
  experimental: {
    typedPages: false,
  },
  vite: {
    esbuild: {
      supported: {
        "top-level-await": true,
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: false,
    shim: false,
  },

  i18n: {
    locales: [
      {
        code: "de",
        iso: "de-DE",
        name: "Deutsch",
        file: "de.ts",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.ts",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
        file: "fr.ts",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "de",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      cookieCrossOrigin: false,
      cookieSecure: false,
      alwaysRedirect: false,
      fallbackLocale: "de",
    },
    vueI18n: "./i18n.config.ts",
  },
  app: {
    head: {
      title: "Tumaini Jipya",
      meta: [
        {
          name: "description",
          content: "Wie geben Hoffung da wo es sie nicht mehr gibt.",
        },
        {
          name: "keywords",
          content: "e.V, Humanitäre Hilfe, Spenden",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/images/logo.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
});