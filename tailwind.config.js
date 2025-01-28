module.exports = {
  // Specify the paths to all of the template files
  content: [
    "./src/**/*.{html,js}", // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      // Extend Tailwind's default theme
      colors: {
        customBg: "#B68C5A",
      },
      fontFamily: {
        secondary: ["Poppins", "serif"],
      },
      spacing: {
        128: "32rem",
      },
      rotate: {
        135: "135deg",
        1: "1deg",
      },
    },
  },
  plugins: [
    // Add custom plugins if needed
  ],
};
