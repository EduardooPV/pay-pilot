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
      display2: "61.04px",
      paragraph2: "16px",
    },
    lineHeight: {
      display2: "80px",
      paragraph2: "28px",
    },
  },
  plugins: [],
};
