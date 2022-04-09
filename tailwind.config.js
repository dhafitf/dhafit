module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#54b5ff",
        secondary: "#5b5e8d",
        cont: "#323538",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
