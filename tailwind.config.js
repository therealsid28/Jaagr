/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: ' #F3F6FB',
        button: '#5662F6',
        'button-sec': '#D9D9D9',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Add your custom font here
        poppins: ['Poppins', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
