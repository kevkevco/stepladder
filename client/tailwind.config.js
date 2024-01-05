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
    extend: {},
  },
  plugins: [],
}
