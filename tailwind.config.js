/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
'Grey': 'hsl(0, 0%, 50%)',
'Black': 'hsl(0, 0%, 7%)',
'Yellow': 'hsl(47, 88%, 63%)',
      },

      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

