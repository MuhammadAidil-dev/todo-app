/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6767',
        secondary: '#F24E1E',
        background: '#F5F8FF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        texture: "url('/assets/images/bg-image-login-page.png')",
      },
    },
  },
  plugins: [],
};
