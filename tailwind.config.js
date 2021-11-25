module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/*.{html,js}',
    './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006BB9',
          'dark-light': '#CADCE2',
          lighter: '#F2F8FA',
          light: '#30A0E0',

        },
        secondary: {
          DEFAULT: '#FFC973',
        },
        black: {
          DEFAULT: '#232323'
        }
      },
      fontSize: {
        ss: ['12px', '17px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}