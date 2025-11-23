/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MTM Brand Colors
        navy: '#2B5F8E',        // Primary brand color
        turquoise: '#4AB5C4',   // Accent color (the "O" in moment)
        'turquoise-dark': '#3A95A0', // Accessible text color
        warmYellow: '#F5D574',  // Complementary accent
        beige: '#F5E6D3',       // Background/neutral

        // Extended palette for dashboard
        success: '#2ecc71',
        warning: '#f39c12',
        danger: '#e74c3c',
        info: '#3498db',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
