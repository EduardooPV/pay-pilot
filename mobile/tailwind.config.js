/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        primary100: "#668CFF",
        primary300: "#4977FF",
        primary500: "#245BFF",
        neutral500: "#363434",
        neutral600: "#232222",
        error: "#E00000",
        success: "#3FCD1B",
      },
      fontFamily: {
        regular: "Roboto_400Regular",
        bold: "Roboto_700Bold",
        black: "Roboto_900Black",
      },
    },
    fontSize: {
      display2: "3.815rem",
      display1: "3.815rem",
      paragraph2: "1rem",
      caption: "0.8rem",
    },
    lineHeight: {
      display2: "5rem",
      paragraph2: "1.75rem",
      caption: "1.5rem",
    },
  },
  plugins: [],
};
