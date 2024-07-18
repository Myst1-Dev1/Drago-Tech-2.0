import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "homeBanner": "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(/images/home-banner.jpg)",
        "collectionBg":"url(/images/collection-bg.jpg)"
      },
    },
  },
  plugins: [],
};
export default config;
