const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
 mode: "jit",
 purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 darkMode: false, // or 'media' or 'class'
 theme: {
  screens: {
   pics: "1080px",
   xs: '460px',
   xxl: '1470px',
   ...defaultTheme.screens,
  },
  colors: {
   white: "#ffffff",
   black: "#000000",
   light: "#eeeeee",
   lightmedium: "#8e8e8e",
   medium: "#344246",
   medium50: "#34424679",
   dark: "#1E292A",
   primary: "#FFB900",
   primaryTransition: "#ffc31f",
   secondary: "#00C2EF",
   ocean: "#0092b3",
   red: "#FF0000",
   green: "#00ff00",
   blue: "#0000ff",
   skyblue: "#209fff",
   greenHue: "#6aff8d",
   redHue: "#ff8e8e",
   greenHueHover: "#28a74667",
   redHueHover: "#ff00005d",
   extend: {},
  },
 },
 variants: {
  extend: {
   backgroundColor: ["even"],
  },
 },
 plugins: [],
};
