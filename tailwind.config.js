/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      fontSize: {
        '10xl': '143px',
    },
    },
  },
  plugins: [],
};
