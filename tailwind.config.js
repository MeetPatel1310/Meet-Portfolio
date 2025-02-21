/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         bounceInLeft: {
//           '0%': { opacity: '0', transform: 'translateX(-300px)' },
//           '60%': { opacity: '1', transform: 'translateX(25px)' },
//           '80%': { transform: 'translateX(-10px)' },
//           '100%': { transform: 'translateX(0)' },
//         },
//       },
//       animation: {
//         bounceInLeft: 'bounceInLeft 1s ease-out forwards',
//       },
//     },
//   },
//   plugins: [],
// };
