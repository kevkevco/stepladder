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
    colors: {
      'jet': {
        DEFAULT: '#333132',
        900: '#0a0a0a',
        800: '#151414',
        700: '#1f1e1f',
        600: '#2a2829',
        500: '#333132',
        400: '#5e5a5c',
        300: '#878285',
        200: '#afacad',
        100: '#d7d5d6'
      }, 'ocean': {
        DEFAULT: '#0a6378',
        900: '#021418',
        800: '#04272f',
        700: '#063b47',
        600: '#084e5e',
        500: '#0a6378',
        400: '#0f9dbd',
        300: '#2bcaee',
        200: '#71dcf4',
        100: '#b8edf9'
      }, 'moss': {
        DEFAULT: '#68bf8d',
        900: '#12291c',
        800: '#235338',
        700: '#357c54',
        600: '#47a670',
        500: '#68bf8d',
        400: '#87cca5',
        300: '#a5d8bb',
        200: '#c3e5d2',
        100: '#e1f2e8'
      }, 'lime': {
        DEFAULT: '#97b63f',
        900: '#1e240c',
        800: '#3c4919',
        700: '#5a6d25',
        600: '#789232',
        500: '#97b63f',
        400: '#adc961',
        300: '#c2d688',
        200: '#d6e4b0',
        100: '#ebf1d7'
      }, 'sky': {
        DEFAULT: '#3dadb9',
        900: '#0c2225',
        800: '#184549',
        700: '#25676e',
        600: '#318993',
        500: '#3dadb9',
        400: '#60bfca',
        300: '#88cfd7',
        200: '#afdfe4',
        100: '#d7eff2'
      }, 'earth': {
        DEFAULT: '#1f5e40',
        900: '#06130d',
        800: '#0d261a',
        700: '#133927',
        600: '#194d34',
        500: '#1f5e40',
        400: '#339968',
        300: '#53c68e',
        200: '#8cd9b4',
        100: '#c6ecd9'
      }, 'sun': {
        DEFAULT: '#f29829',
        900: '#351f03',
        800: '#6a3d06',
        700: '#9f5c09',
        600: '#d47a0c',
        500: '#f29829',
        400: '#f5ab51',
        300: '#f7c07d',
        200: '#fad5a8',
        100: '#fcead4'
      },
      extend: {},
    },
    plugins: [],
  }
}
