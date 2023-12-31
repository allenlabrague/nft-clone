/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./dist/html/*{html,js}",
    "./dist/data/*{html,js}",
    "./dist/js/*{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poopins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "840px",
        // => @media (min-width: 840px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    plugins: [],
  },
};
