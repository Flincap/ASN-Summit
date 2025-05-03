/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d7fe',
          300: '#a3bdfc',
          400: '#7a9cf7',
          500: '#5b7df1',
          600: '#4560e3',
          700: '#3a4bcd',
          800: '#3341a5',
          900: '#2f3c81',
          950: '#1e2252',
        },
        secondary: {
          50: '#f8f7ee',
          100: '#f3eccc',
          200: '#e9d899',
          300: '#e0c565',
          400: '#d7b03f',
          500: '#d19e28',
          600: '#bd7e22',
          700: '#9c5d22',
          800: '#7f4923',
          900: '#693d21',
          950: '#3c1f10',
        },
        accent: {
          50: '#effbf7',
          100: '#d5f6ea',
          200: '#acecd9',
          300: '#75ddc2',
          400: '#41c5a7',
          500: '#25ab8f',
          600: '#168976',
          700: '#136e61',
          800: '#14564e',
          900: '#144841',
          950: '#062a27',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2b2b2b',
          600: '#232323',
          700: '#1a1a1a',
          800: '#121212',
          900: '#090909',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'even': '0 0 15px rgba(0, 0, 0, 0.05)',
        'custom': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'gradient-primary': 'linear-gradient(135deg, rgba(30, 34, 82, 0.95) 0%, rgba(59, 75, 205, 0.90) 100%)',
      },
    },
  },
  plugins: [],
};