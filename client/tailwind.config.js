/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // The paths specified here determine where Tailwind CSS will look for class names.
    // Tailwind scans these files for any used classes and generates utility CSS accordingly.
    // Using glob patterns (**) to include all JavaScript/JSX (and TS/TSX if using TypeScript)
    // files in the 'client/src' directory. Adjust or add paths if using Tailwind classes elsewhere.
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      'halogen': ['halogen', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif'],
      'open': ['"Open Sans"', 'sans-serif'],
    },
    colors: {
      'jet': {
        DEFAULT: '#333132',
        100: '#d7d5d6',
        200: '#afacad',
        300: '#878285',
        400: '#5e5a5c',
        500: '#333132',
        600: '#2a2829',
        700: '#1f1e1f',
        800: '#151414',
        900: '#0a0a0a'
      }, 'ocean': {
        DEFAULT: '#0a6378',
        100: '#b8edf9',
        200: '#71dcf4',
        300: '#2bcaee', // TODO check hue
        400: '#0f9dbd',
        500: '#0a6378',
        600: '#084e5e',
        700: '#063b47',
        800: '#04272f',
        900: '#021418'
      }, 'moss': {
        DEFAULT: '#68bf8d',
        100: '#e1f2e8',
        200: '#c3e5d2',
        300: '#a5d8bb',
        400: '#87cca5',
        500: '#68bf8d',
        600: '#47a670',
        700: '#357c54',
        800: '#235338',
        900: '#12291c'
      }, 'lime': {
        DEFAULT: '#97b63f',
        100: '#ebf1d7',
        200: '#d6e4b0',
        300: '#c2d688',
        400: '#adc961',
        500: '#97b63f',
        600: '#789232',
        700: '#5a6d25',
        800: '#3c4919',
        900: '#1e240c'
      }, 'sky': {
        DEFAULT: '#3dadb9',
        100: '#d7eff2',
        200: '#afdfe4',
        300: '#88cfd7',
        400: '#60bfca',
        500: '#3dadb9',
        600: '#318993',
        700: '#25676e',
        800: '#184549',
        900: '#0c2225'
      }, 'earth': {
        DEFAULT: '#1f5e40',
        100: '#c6ecd9',
        200: '#8cd9b4',
        300: '#53c68e',
        400: '#339968',
        500: '#1f5e40',
        600: '#194d34',
        700: '#133927',
        800: '#0d261a',
        900: '#06130d'
      }, 'sun': {
        DEFAULT: '#f29829',
        100: '#fcead4',
        200: '#fad5a8',
        300: '#f7c07d',
        400: '#f5ab51',
        500: '#f29829',
        600: '#d47a0c',
        700: '#9f5c09',
        800: '#6a3d06',
        900: '#351f03'
      },
      extend: {},
    },
    plugins: [],
  }
}
