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
        main: {
          100: "#202433",
          200: "#252D3A",
          300: "#272D43",
          400: "#33394F",
        },
        light: {
          100: "#D1CAFF",
          200: "#FFCACA",
          300: "#CAECFF",
        },
        neutral: {
          brown: "#8D8080",
          gray: "#999",
        },
        primary: {
          100: "#FC728B",
          200: "#F4C395",
          300: "#A296BD",
        },
        faded: "rgba(255,255,255,0.6)",
        gray: {
          100: "#DDD8D8",
          200: "#D9D9D9",
          300: "#DDD",
        },
        border: {
          active: "#7B61FF",
        },
        avatar: {
          primary: "#9AB78D",
          secondary: "#8392AE",
        },
      },
      gridTemplateColumns: {
        main: "1fr 2fr 1fr",
      },
      height: {
        1.2: "120%",
      },
      boxShadow: {
        card: "10px 10px 0px 0px rgba(2,2,2,0.45)",
      },
    },
  },
  plugins: [],
};
