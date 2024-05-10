/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        'auto': 'auto',
        'full': '100%',
        'screen': '2.5rem',
      },},
  },
  plugins: [],
}

