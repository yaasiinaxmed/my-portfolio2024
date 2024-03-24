/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'linear-gradient(to top, #141620, #0C0C0F)',
        secondColor: '#1576FE',
        bgColor: '#060606',
      },
    },
  },
  plugins: [],
};
