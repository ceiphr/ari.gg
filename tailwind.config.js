module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: { 175: "1.75", 200: "2" },
      spacing: {
        "2px": "2px",
        "3px": "3px",
        "5px": "5px",
        "15px": "15px",
        "31px": "31px",
        "50px": "50px",
      },
      margin: { "24px": "24px" },
      fontSize: {
        "10xl": [
          "12rem",
          {
            lineHeight: "10rem",
          },
        ],
      },
      borderWidth: {
        5: "5px",
      },
      transitionDuration: { 400: "400ms" },
      width: { "0.5px": "0.5px" },
    },
  },
  plugins: [],
};
