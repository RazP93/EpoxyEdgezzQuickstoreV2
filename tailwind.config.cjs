/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontSize: {
      xs: [
        '9.00px',
        {
          lineHeight: '12.00px',
        },
      ],
      sm: [
        '12.00px',
        {
          lineHeight: '16.00px',
        },
      ],
      base: [
        '16.00px',
        {
          lineHeight: '24.00px',
        },
      ],
      lg: [
        '20px',
        {
          lineHeight: '24px',
        },
      ],
      xl: [
        '32px',
        {
          lineHeight: '40px',
        },
      ],
      '2xl': [
        '40px',
        {
          lineHeight: '56px',
        },
      ],
      '3xl': [
        '48px',
        {
          lineHeight: '64px',
        },
      ],
      '4xl': [
        '64px',
        {
          lineHeight: '80px',
        },
      ],
      'dynamic-sm': [
        'clamp(0.85rem, 0.75rem + 1vw, 3rem)',
        {
          lineHeight: 'clamp(12.00px, 1.333rem + 1vw, 3.790rem)',
        },
      ],
      'dynamic-md': [
        'clamp(1rem, 0.6rem + 1.25vw, 4rem)',
        {
          lineHeight: 'clamp(14.00px, 1.555rem + 1.5vw, 5.30rem)',
        },
      ],
      dynamic: [
        'clamp(1rem, 0.4rem + 3vw, 4rem)',
        {
          lineHeight: 'clamp(16.00px, 1.777rem + 3vw, 7.580rem)',
        },
      ],
      'dynamic-lg': [
        'clamp(2rem, 0.75rem + 3vw, 4rem)',
        {
          lineHeight: 'clamp(16.00px, 1.777rem + 3vw, 7.580rem)',
        },
      ],
      'dynamic-xl': [
        'clamp(2rem, 0.4rem + 8vw, 10rem)',
        {
          lineHeight: 'clamp(32.00px, 3.555rem + 8vw, 15.160rem)',
        },
      ],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        background: '#0D0A07',
        persimmon: {
          DEFAULT: '#FD664E',
          50: '#FFEFED',
          100: '#FFDCD6',
          200: '#FEB4A9',
          300: '#FE8D7B',
          400: '#FD664E',
          500: '#FC3211',
          600: '#CE1E02',
          700: '#921502',
          800: '#550D01',
          900: '#190400',
          950: '#000000',
        },
        caramel: {
          DEFAULT: '#EF802F',
          50: '#FCEAD9',
          100: '#FBDFC7',
          200: '#F8C8A1',
          300: '#F5B17B',
          400: '#F29955',
          500: '#EF802F',
          600: '#D15F10',
          700: '#98440C',
          800: '#5F2907',
          900: '#261003',
          950: '#0A0401',
        },
        bark: {
          DEFAULT: '#A27D57',
          50: '#F4F0EB',
          100: '#EBE3DB',
          200: '#DAC9B9',
          300: '#C8B098',
          400: '#B69677',
          500: '#A27D57',
          600: '#816346',
          700: '#604A34',
          800: '#3F3022',
          900: '#1E1710',
          950: '#0D0A07',
        },
        pine: {
          DEFAULT: '#35A05C',
          50: '#E8F7EE',
          100: '#D1F0DC',
          200: '#A7E2BC',
          300: '#79D39A',
          400: '#4BC377',
          500: '#35A05C',
          600: '#2A7E49',
          700: '#206037',
          800: '#164126',
          900: '#0A1F12',
          950: '#050F09',
        },
      },
      backgroundImage: {
        noise: "url('../assets/images/noise.svg')",
      },
      screens: {
        xs: '425px',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        down: 'down 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        down: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
