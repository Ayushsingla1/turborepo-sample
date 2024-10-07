/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "../../packages/ui/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./screens/**/*{.ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        "2.5xl": "1730px",
      },
    },
  },
  plugins: [],
};