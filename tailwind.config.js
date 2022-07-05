/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./components/**/*.{ts,tsx}',
	'./layouts/**/*.{ts,tsx}',
	'./seo/**/*.{ts,tsx}',
	'./pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111',
        light: '#fff',
        sunflower: '#FFCD00',
        silver: '#EFEAE4',
        tangerine: '#F79D85',
        melon: '#A5D0A8',
        ocean: '#8CB3D8'
      }
    },
  },
  plugins: [],
}
