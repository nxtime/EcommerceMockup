/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      writingMode: {
        right: 'writing-mode: vertical-lr; transform: rotage(180deg)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Trebuchet: ['Trebuchet MS', 'sans-serif']
      },
      screens: {
        'max-2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'max-xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'max-lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'max-md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'max-sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }}
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
}
