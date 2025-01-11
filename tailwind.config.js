/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    extend: {
      screens:{
        xs: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      pseudo: {
        after: {
          content: '""',
          display: 'block',
          width: '100%',
          height: '2px',
          backgroundColor: 'currentColor',
          marginTop: '4px'
        }
      }
    },
    
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    function ({ addUtilities, e }) {
      addUtilities(
        {
          '.underline-after': {
            position: 'relative',
            '::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '2px',
              backgroundColor: 'currentColor',
              marginTop: '4px'
            }
          }
        },
        {
          variants: ['responsive', 'hover']
        }
      )
    }
  ],
}

