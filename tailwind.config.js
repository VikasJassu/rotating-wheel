/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 42s linear infinite',
       
      },
      boxShadow: {
        'myshadow': '0px 0px 0px 18px rgb(241,228,255)',
      }
    },
  },
  plugins: [],
}
