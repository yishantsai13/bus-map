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
          'dark-lighter': '#DFE9EC',
          lighter: '#F2F8FA',
          light: '#30A0E0',
        },
        secondary: {
          DEFAULT: '#FFC973',
        },
        black: {
          DEFAULT: '#232323'
        },
        gray: {
          border: 'rgba(0, 0, 0, 0.2)',
          text: '#828282'
        }
      },
      fontSize: {
        ss: ['12px', '17px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '26px'],
        xl: ['24px', '32px'],
      },
      borderRadius: {
        DEFAULT: '5px',
        lg: '10px',
        xl: '20px'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      dropShadow: {
        'gray': '0px 0px rgba(32, 47, 56, 0.2)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}