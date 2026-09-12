/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D1117',
        surface: '#161B22',
        accent: '#C9A84C',
        teal: '#2DD4BF',
        text: '#F5F0E8',
        muted: '#8B949E',
        border: '#30363D',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
