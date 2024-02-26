/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'primary': 'hsl(0, 0%, 100%)',
				'secondary': 'hsl(217, 28%, 15%)',
				'footer': 'hsl(216, 53%, 9%)',
        'testimonials': 'hsl(219, 30%, 18%)',
        'cta': 'hsl(198, 60%, 50%)',
        'cta_hover': 'hsl(176, 68%, 64%)',
        'error': 'hsl(0, 100%, 63%)'
			},
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'sans': ["Opens Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

