/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
 extend: {
      colors: {
        brand: {
          blue:"#5847eb",
          work: "#ff8c66",
          play: "#56c2e6 ",
          study: "#ff5c7c",
          social: "#7536d3",
          selfCare: "#f1c65b",
          veryDarkBlue: "#0f1424",
          darkBlue: "#1c1f4a",
          saturatedBlue: "#6f76c8",
          paleBlue: "#bdc1ff",
        },
      },
      fontFamily: {
        Rubik: ["Rubik"],
      },
    },
  },

  plugins: [],
};
