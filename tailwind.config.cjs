/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.563rem",
        {
          lineHeight: "9.00px",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "12.00px",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "16.00px",
        },
      ],
      lg: [
        "1.333rem",
        {
          lineHeight: "21.33px",
        },
      ],
      xl: [
        "1.777rem",
        {
          lineHeight: "28.43px",
        },
      ],
      "2xl": [
        "2.369rem",
        {
          lineHeight: "37.90px",
        },
      ],
      "3xl": [
        "3.157rem",
        {
          lineHeight: "50.52px",
        },
      ],
      "4xl": [
        "4.209rem",
        {
          lineHeight: "67.34px",
        },
      ],
    },
    extend: {
      colors: {
        charcoal: {
          50: "#ECEEEC",
          100: "#D7DAD7",
          200: "#B0B5B0",
          300: "#889188",
          400: "#626A62",
          500: "#3E433E",
          600: "#313531",
          700: "#252825",
          800: "#191A19",
          900: "#0C0D0C",
        },
        tomato: {
          50: "#FFEEEB",
          100: "#FFE1DC",
          200: "#FEBFB3",
          300: "#FEA090",
          400: "#FD7E68",
          500: "#FD6043",
          600: "#FC2803",
          700: "#C01E02",
          800: "#7E1401",
          900: "#420A01",
        },
        negroni: {
          50: "#FDFAF7",
          100: "#FBF5EF",
          200: "#F6E8DA",
          300: "#F2DECA",
          400: "#EDD1B5",
          500: "#E9C7A5",
          600: "#D99E63",
          700: "#C1782F",
          800: "#7F4F1F",
          900: "#422910",
        },
        buttercup: {
          DEFAULT: "#F2A10D",
          50: "#FEF6E7",
          100: "#FCECCF",
          200: "#FADA9E",
          300: "#F7C76E",
          400: "#F5B43D",
          500: "#F2A10D",
          600: "#BD7E0A",
          700: "#885A07",
          800: "#523704",
          900: "#1D1302",
          950: "#020200",
        },
        persimmon: {
          DEFAULT: "#FD664E",
          50: "#FFEFED",
          100: "#FFDCD6",
          200: "#FEB4A9",
          300: "#FE8D7B",
          400: "#FD664E",
          500: "#FC3211",
          600: "#CE1E02",
          700: "#921502",
          800: "#550D01",
          900: "#190400",
          950: "#000000",
        },
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
