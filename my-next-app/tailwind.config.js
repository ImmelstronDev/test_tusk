/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',
      'md': '740px',
      'xl': '1200px'

    },
    colors: {
      'blue': '#41A4DF',
      'white': '#ffffff',
      'black': '#0D0D12',
      'deepBlue': '#297EE2'
    },
    fontSize: {
      '2xl': '80px'
    }
  },
  plugins: [],
}

