/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondColor: '#338AF3',
        bgColor: '#060606',
      },
    },
  },
  plugins: [],
};
