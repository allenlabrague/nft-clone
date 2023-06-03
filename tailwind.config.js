/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poopins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
