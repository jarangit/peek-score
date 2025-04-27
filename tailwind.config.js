/** @type {import('tailwindcss').Config} */

const token = require("./tailwind-token.config");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...token.theme.extend,
    },
  },
  plugins: [],
};
