import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#E1F5EE",
          500: "#1D9E75",
          600: "#0F6E56",
        },
      },
    },
  },
  plugins: [],
}

export default config
