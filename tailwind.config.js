module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6e60c3",
        accent: "#f4f4f4",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // For body text
        serif: ['Playfair Display', 'serif'], // For headings
      },
    },
  },
  plugins: [],
};
