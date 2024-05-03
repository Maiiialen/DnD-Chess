const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans:[...]
      },
      colors: {
        light: "#D58F64",
        dark: "#7F3300",
        lightgray: "#d3d3d3",
        gray: "#808080",
        orange: "#D58F64",
        chocolate: "#7F3300",
        brown:"#a52a2a",
        matterhorn: "#5e4b4b",
        darkgray: "#3191514",
      },
    },
    screens:{
      "small": {'min':'0px', 'max': '1300px'},
      "middle": {'min':'1301px', 'max': '1700px'}
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".overflow-anchor": {
          "overflow-anchor": "auto",
        },
      });
    }),
  ],
};
