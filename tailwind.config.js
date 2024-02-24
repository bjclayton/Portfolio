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
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
      '7xl': '5.052rem',
    },

    extend: {
      fontFamily: {
        'raleway': ['Raleway', '-apple-system',],
        'lato': ['Lato', 'ui-sans-serif',],
      },

      colors: {
        "dark-gray": "#111111",
        "primary": "#0f172a",
        "secondary": "#6366f1",
        "third": "#21293b",
        "primary-text": "#f1f5f9",
        "secondary-text": "#808ea3"
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

        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
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