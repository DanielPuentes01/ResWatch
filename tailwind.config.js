/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        watch: {
          navy: '#0a1929',
          slate: '#263b50',
          cyan: '#56b9eb',
          alert: '#f59e0b',
          danger: '#ef4444',
          safe: '#10b981',
        },
      },
    },
  },
  plugins: [],
};
