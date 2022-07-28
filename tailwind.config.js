module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#54B5FF",
        lavender: "#5B5E8D",
        gray: "#7C7C7C",
        "dark-gray": "#242728",
        "light-gray": "#36393A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
