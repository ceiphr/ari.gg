module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: { 175: "1.75", 200: "2" },
      spacing: { "3px": "3px", "50px": "50px" },
      fontSize: {
        "10xl": [
          "12rem",
          {
            lineHeight: "10rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
