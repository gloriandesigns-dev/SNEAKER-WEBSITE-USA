/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      colors: {
        heritage: {
          bone: '#F5F2EA',
          sand: '#E6DEC8',
          clay: '#A65D4B',
          ochre: '#C99E55',
          sage: '#8A9A85',
          dusk: '#2C3E50',
          charcoal: '#111111',
          brown: '#3E3228',
          blue: '#0047AB', // Added Cobalt/Royal Blue for the ticker
        }
      },
      backgroundImage: {
        'grain': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}
