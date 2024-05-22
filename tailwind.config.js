/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/*.{html,js}',
  './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ["Caveat", ...defaultTheme.fontFamily.sans],
        'salsa': ["Salsa", ...defaultTheme.fontFamily.sans]
      },
      'animation': {
        'dry':'dry 10s 1s 1 ease',
        'unfurl':'unfurl 7s 0s 1 ease',
        'lightenWall':'lightenWall 7s 0s 1 ease',
        'lightenCeiling':'lightenCeiling 5s 0s 1 ease',
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
        'unfurl': {
          '0%': {
            'background-image': 'linear-gradient(to right, #541c46 48%, #404040 50%)',
            'background-size':'300% 300%',
            'background-position': 'right center'
          },
          '100%': {
            'background-image': 'linear-gradient(to right, #541c46 48%, #404040 50%)',
            'background-size':'300% 300%',            
            'background-position': 'left center'
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

