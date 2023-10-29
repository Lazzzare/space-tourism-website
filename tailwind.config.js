/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0B0D17",
        veryLightBlue: "#D0D6F9",
        white: "#fff",
      },
    },
  },
  plugins: [],
};