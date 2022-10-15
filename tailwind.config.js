/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      inter700: ["Inter 700", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        landing: "url('../images/bg-landing.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
