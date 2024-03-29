import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./contents/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#54B5FF",
        baseBg: "#27292A",
        hoverBg: "#3b3e3f",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [typography],
} satisfies Config

export default config
