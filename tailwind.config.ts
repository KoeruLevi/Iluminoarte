import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f8ff",
          100: "#eef0ff",
          200: "#d8dcff",
          300: "#b2baff",
          400: "#8a96ff",
          500: "#6172ff",
          600: "#4b59e6",
          700: "#3a45b4",
          800: "#2b3485",
          900: "#1f2661",
        },
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
