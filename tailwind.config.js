/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ["Caveat", ...defaultTheme.fontFamily.serif]    
      },
      'animation': {
        'dry':'dry 10s 1s 1 ease',
        'lightenWall':'lightenWall 7s 0s 1 ease',
        'lightenCeiling':'lightenCeiling 10s 0s 1 ease',
        'addCeilingLight':'addCeilingLight 2s 0s 1 ease'
    },
    'keyframes': {
        'dry': {
            '0%': {
                'background-size':'100% 100%'
            },
            '100%': {
                'background-size':'200% 200%'
            }
        },
        'lightenWall': {
          '0%': {
            'background': '#71717a'
          },
          '100%': {
            'background': '#bfdce0'
          }
        },
        'lightenCeiling': {
          '0%': {
            'background': '#635b50',
            'color': '#ebe6e1'
          },
          '100%': {
            'background': '#ede7df',
            'color': '#302920'
          },
          'addCeilingLight': {
            '0%': {
              'box-shadow': '0 25px 50px -12px #18181b'
            },
            '100%': {
              'box-shadow': '0 25px 50px -12px #fefce8'
            }
          }
        }
      }
    },
  },
  plugins: [],
}

