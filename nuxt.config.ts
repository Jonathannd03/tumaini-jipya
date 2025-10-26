// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: "2025-09-12",
  ssr: false,
  target: "static",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Tumaini Jipya",
      meta: [
        {
          name: "description",
          content:
            "Wie geben Hoffung da wo es sie nicht mehr gibt.",
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
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"],
          },
          colors: {
            primary: {
              50: "#f0f9ff",
              500: "#667eea",
              600: "#5a67d8",
              700: "#4c51bf",
            },
            secondary: {
              500: "#764ba2",
              600: "#6b46c1",
            },
          },
          animation: {
            float: "float 6s ease-in-out infinite",
            "slide-in": "slideIn 0.6s ease-out",
          },
        },
      },
    },
  },
});