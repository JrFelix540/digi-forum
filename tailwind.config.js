/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/auth/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.tsx",
    "./src/landing/**/*.tsx",
    "./src/threads/**/*tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-gradient":
          "linear-gradient(141deg, #F2B4B4 0%, rgba(225, 202, 255, 0.69) 41.68%, rgba(202, 239, 255, 0.47) 72.47%, rgba(251, 202, 255, 0.32) 100%)",
        "tertiary-btn-gradient":
          "linear-gradient(135deg, #77A6DC 0%, #585EF5 100%)",
        "profile-gradient":
          "linear-gradient(45deg, rgba(65, 88, 208, 0.60) 0%, #C850C0 46.88%, #FFCC70 100%)",
      },
      colors: {
        brand: {
          primary: "#202433",
          secondary: "#33394f",
        },
        link: "#A296BD",
        button: {
          primary: "#A296BD",
          secondary: "#D1CAFF",
        },
        faded: "rgba(255,255,255,0.6)",
        grey: "#DDD",
        darkgrey: "#999",
        lightgrey: "#D9D9D9",
        comment: {
          bg: "#FC728B",
        },
        card: {
          bg: "#272D43",
        },
        brown: {
          neutral: "#8D8080",
        },
        border: {
          active: "#7B61FF",
          input: "#D1CAFF",
        },
      },
      gridTemplateColumns: {
        main: "1fr 2fr 1fr",
      },
    },
  },
  plugins: [],
};
