/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: "#94381C",
          cream: "#FAF6F0",
          sand: "#F4ECE1",
          charcoal: "#1A1817",
          muted: "#6F6A65",
          border: "#E8DEC8"
        }
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
