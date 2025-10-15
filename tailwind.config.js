/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
         colors: { accent: '#06b6d4' }
      }
    },
  },
  plugins: [],
}





// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         accent: '#06b6d4'
//       },
//       animation: {
//         'reverse-spin': 'reverse-spin 60s linear infinite',
//       },
//       keyframes: {
//         'reverse-spin': {
//           '0%': { transform: 'rotate(0deg) translate(-50%, -50%)' },
//           '100%': { transform: 'rotate(-360deg) translate(-50%, -50%)' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       }
//     },
//   },
//   plugins: [],
// }



