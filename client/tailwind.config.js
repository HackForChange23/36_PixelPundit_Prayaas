/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          gradientbg: "linear-gradient(180deg, #A8FF78 0%, #78FFD6 100%)",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Salsa", "sans-serif"],
      },
      colors: {
        signloginbg: "#b2e185",
        lightText: "#c4cfde",
        designColor: "#01e1ff",
      },
    },
  },
  plugins: [],
}
