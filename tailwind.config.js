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
        'dark-primary': '#2C3639',
        'dark-secondary': '#333456',
        'dark-support': '#DCD7C9',
        'dark-text': '#fff',
        'light-primary': '#fff',
        'light-secondary': '#1e8bff',
        'light-support': '#6955ff',
        'light-text': '#2C3639',
      },
    },
  },
  plugins: [],
};
