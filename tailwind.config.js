module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        handwriting2: ['"Dancing Script"', 'cursive'],
        handwriting: ['"Great Vibes"', 'cursive'],
        luxury: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
