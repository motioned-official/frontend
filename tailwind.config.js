/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './theme/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './seo/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#060930',
        'dark-secondary': '#333456',
        'dark-support': '#595B83',
        'dark-text': '#fff',
        'light-primary': '#fff',
        'light-secondary': '#1e8bff',
        'light-support': '#6955ff',
        'light-text': '#212338',
      },
    },
  },
  plugins: [],
};
