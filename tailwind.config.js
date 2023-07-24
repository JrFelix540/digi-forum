/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/auth/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-gradient":
          "linear-gradient(141deg, #F2B4B4 0%, rgba(225, 202, 255, 0.69) 41.68%, rgba(202, 239, 255, 0.47) 72.47%, rgba(251, 202, 255, 0.32) 100%)",
      },
      colors: {
        brand: {
          primary: "#202433",
          secondary: "#33394f",
        },
        link: "#A296BD",
        button: {
          primary: "#A296BD",
        },
        faded: "rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};
