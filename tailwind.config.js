/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  safelist: [
    'text-gray-800',
    'text-red-900',
    'text-blue-900',
    // Add any other darker shades
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

