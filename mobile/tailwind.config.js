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
        neutral400: "#767676",
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
      fontSize: {
        display1: 79,
        display2: 61,
        h1: 48,
        h2: 39,
        h3: 31,
        h4: 25,
        h5: 20,
        paragraph1: 18,
        paragraph2: 16,
        caption: 12.8,
      },
      lineHeight: {
        display1: 108,
        display2: 80,
        h1: 64,
        h2: 60,
        h3: 52,
        h4: 40,
        h5: 32,
        paragraph1: 36,
        paragraph2: 28,
        caption: 24,
      },
    },
  },
  plugins: [],
};
