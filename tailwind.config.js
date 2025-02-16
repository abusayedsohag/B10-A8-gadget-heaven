/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerBg': 'linear-gradient(to top, transparent 40%, #9333ea 40%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

