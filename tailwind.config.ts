import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bajer-primary": "#BC6C25",
        "bajer-secondary": "#DDA15E",
        "bajer-base": "#FEFAE0",
      },
      backgroundImage: {
        heroImage: "url('/assets/beer_4.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

/* to colurs to use if need be fitted in the palette 606C38 283618*/
