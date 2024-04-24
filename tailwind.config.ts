module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        default: "#a8b6bc",
        theme: "#3cd2a5",
        primary: "#4e9cff",
        secondary: "#798e98",
        warning: "#ff9f0c",
        danger: "#ff6060",
        success: "#3cd2a5",
        info: "#30beff",
        dark: "#35434a"
      }
    },
  },
  plugins: [],
};