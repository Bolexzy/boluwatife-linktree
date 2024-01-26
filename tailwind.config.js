/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00d8ce",
          secondary: "#ff4d00",
          accent: "#6b4700",
          neutral: "#0b0902",
          "base-100": "#21202b",
          info: "#00efff",
          success: "#7da900",
          warning: "#f85800",
          error: "#cb304f",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "light-gradient":
          "linear-gradient(106deg, #C5C7C9 22.29%, #9ABDC7 48.81%, #EEEFF4 120.48%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
