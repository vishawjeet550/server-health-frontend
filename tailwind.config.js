/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'sidenav': 'calc(100vh - 300px);',
        '19.5': '4.875rem'
      },
      maxWidth: {
        '62.5': '17.625rem'
      },
      margin: {
        '68.5': '17.125rem'
      },
      padding: {
        '2.7': '0.675rem',
        '2.5': '0.625rem',
      }
    },
  },
  plugins: [],
}

