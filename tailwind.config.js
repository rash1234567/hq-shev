/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-figtree)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '3.5rem',
          '2xl': '4.5rem',
        },
        screens: {
          '2xl': '1440px',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#552ac1',
          50: '#f8f7fc',
          200: '#e6e6fa',
          400: '#8465d2',
          700: '#4c26ad',
        },
        secondary: {
          DEFAULT: '#0076F6',
          100: '#f7fafc',
          200: '#e6effa',
          400: '#76b3f6',
          700: '#1262cd',
        },
        tertiary: {
          DEFAULT: '#03045E',
          100: '#f7f8fc',
          200: '#efeffb',
          400: '#6d6fc4',
          700: '#03034f',
        },
        success: {
          DEFAULT: '#3CCF4E',
          200: '#afeab7',
          300: '#89e194',
          400: '#62d871',
        },
        error: {
          DEFAULT: '#e30c14',
          200: '#f8d5d7',
          300: '#f3a4a9',
          400: '#ec6068',
        },
        textHeading: {
          DEFAULT: '#021645',
        },
        textBody: {
          DEFAULT: '#414141',
        },
        inActive: {
          DEFAULT: '#A0A0A0',
        },
        white: {
          DEFAULT: colors.white,
        },
        strokes: {
          DEFAULT: '#ECEFF1',
        },
        grey: {
          DEFAULT: '#CCCEDE',
        },
      },
    },
  },
  plugins: [],
};
