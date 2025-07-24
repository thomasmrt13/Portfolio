/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1823',   // par défaut: `text-brand`, `bg-brand`
        },
        test: {
          DEFAULT: '#1A191D'
        }
      },
    },
  },
  plugins: [],
}

