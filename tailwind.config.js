/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      brightness: {
        '85': '0.85', // Add brightness-85 with 0.85 value
      },
      spacing: {
        '1/8': '12.5%',
      },
      
    },
  },
  plugins: [],
}