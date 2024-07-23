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
        "ic-red": "hsl(0, 100%, 66%)",
        "ic-white": "hsl(0, 0%, 100%)",
        "ic-light-grayish-violet": "hsl(270, 3%, 87%)",
        "ic-dark-grayish-violet": "hsl(279, 6%, 55%)",
        "ic-very-dark-violet": "hsl(278, 68%, 11%)",
        "ic-gradient-end": "hsl(278, 94%, 30%)",
        "ic-gradient-start": "hsl(249, 99%, 64%)",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
        "ic-gradient": "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
      },
      fontFamily: {
        spacegrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      fontWeight: {
        normal: "500",
      },
      screens: {
        sm: "768px",
        // md: "1240px",
        // lg: "1100px",
        // mobile: "375px",
        // desktop: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
