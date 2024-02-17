const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    fontSize: {
      // xs: ['12px', '16px'],
      // sm: ['14px', '20px'],
      // base: ['16px', '19.5px'],
      // lg: ['18px', '21.94px'],
      // xl: ['20px', '24.38px'],
      // '2xl': ['24px', '29.26px'],
      // '3xl': ['28px', '50px'],
      // '4xl': ['48px', '58px'],
      // '8xl': ['96px', '106px'],
      // '7xl': '7rem',
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', '-apple-system',],
        'lato': ['Lato', 'ui-sans-serif',],
      },
      colors: {
      },
      screens: {
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    addVariablesForColors,
    backgroundSVG
  ],
  darkMode: 'class',
}


// This plugin adds each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }) {
  let allColors = theme("colors");
  let newVars = Object.fromEntries(
    Object.entries(allColors).flatMap(([key, val]) =>
      typeof val === "string" ? [[`--${key}`, val]] : Object.entries(val).map(([subKey, subVal]) => [`--${key}-${subKey}`, subVal])
    )
  );

  addBase({
    ":root": newVars,
  });
}


function backgroundSVG({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-grid": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: theme("backgroundColor"), type: "color" }
  );
}