// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary: teal (matches the teal-* classes used across the site)
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        // Supporting green: emerald (used in brand gradients)
        secondary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        // Warm sand/amber accent for CTAs.
        // Contrast notes (WCAG AA): use accent-400/500 with dark text
        // (accent-950 or gray-900), or accent-700+ with white text.
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Outfit", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display scale for hero/section headlines
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgb(15 118 110 / 0.08), 0 4px 24px -4px rgb(15 118 110 / 0.06)",
        card: "0 4px 20px -4px rgb(15 118 110 / 0.12), 0 8px 32px -8px rgb(15 118 110 / 0.08)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
