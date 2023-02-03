/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      gray: {
        100: "hsl(212, 45%, 89%)",
        500: "hsl(220, 15%, 55%)",
      },
      blue: {
        900: "hsl(218, 44%, 22%)",
      },
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
