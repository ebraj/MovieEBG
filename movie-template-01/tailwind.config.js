/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        AtypDisplayBold: ["AtypDisplayBold", "sans-serif"],
        AtypDisplayBoldItalic: ["AtypDisplayBoldItalic", "sans-serif"],
        AtypDisplayItalic: ["AtypDisplayItalic", "sans-serif"],
        AtypDisplayLight: ["AtypDisplayLight", "sans-serif"],
        AtypDisplayLightItalic: ["AtypDisplayLightItalic", "sans-serif"],
        AtypDisplayMedium: ["AtypDisplayMedium", "sans-serif"],
        AtypDisplayMediumItalic: ["AtypDisplayMediumItalic", "sans-serif"],
        AtypDisplayRegular: ["AtypDisplayRegular", "sans-serif"],
        AtypDisplaySemibold: ["AtypDisplaySemibold", "sans-serif"],
        AtypDisplaySemiboldItalic: ["AtypDisplaySemiboldItalic", "sans-serif"],
        AtypDisplayThin: ["AtypDisplayThin", "sans-serif"],
        AtypDisplayThinItalic: ["AtypDisplayThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
