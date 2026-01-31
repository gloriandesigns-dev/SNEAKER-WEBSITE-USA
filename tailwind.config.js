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
          bone: '#F5F2EA',    // Light cream background
          sand: '#E6DEC8',    // Darker beige
          tan: '#D2B48C',     // New Tan accent
          clay: '#A65D4B',    // Terracotta accent
          ochre: '#C99E55',   // Gold/Ochre accent
          sage: '#8A9A85',    // Muted green
          dusk: '#2C3E50',    // Keep for deep contrast if needed, or replace usage
          charcoal: '#1A1A1A', // Dark Grey (Avoiding pure black #000000)
          brown: '#3E3228',   // Dark Brown (Primary dark background)
        }
      },
      backgroundImage: {
        'grain': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
}
