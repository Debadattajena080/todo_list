/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#1B1A17",
        secondaryBg: "#1F1E1B",
        primaryBorder: "#A35709",
        secondaryBorder: "#FF5303",
        primaryWhite: "#F0E3CA",
      },
    },
  },
  plugins: [],
};
