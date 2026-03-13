/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hp-black': '#0A0A0A',
        'hp-yellow': '#F5C518',
        'hp-yellow-dark': '#D4A916',
        'hp-900': '#111111',
        'hp-800': '#1A1A1A',
        'hp-700': '#222222',
        'hp-600': '#333333',
        'hp-400': '#888888',
        'hp-200': '#CCCCCC',
      },
    },
  },
  plugins: [],
}
