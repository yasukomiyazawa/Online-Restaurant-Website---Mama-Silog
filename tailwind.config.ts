/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "blue": "#0f172a",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        'silogMeals': "url('/hero.png')",
        'silogMeals1': "url('/hero1.png')",
        'silogMeals2': "url('/silogMeals.png')",
        'footerBg': "url('/footer-bg.png')",
        'blog1': "url('/blog-1.png')",
        'blog2': "url('/blog-2.png')",
        'blog3': "url('/blog-3.png')",
        'blog4': "url('/blog-4.png')",
        'blog5': "url('/blog-5.png')",
        'blog6': "url('/blog-6.png')",
        'tapsilog': "url('/tapsilog.png')",
        'bangsilog': "url('/bangsilog.png')",
        'tocilog': "url('/tocilog.png')",
        'spamsilog': "url('/spamsilog.png')",
        'tuyosilog': "url('/tuyosilog.png')",
        'cornsilog': "url('/cornsilog.png')",
        'hotsilog': "url('/hotsilog.png')",
        'kawalisilog': "url('/kawalisilog.png')",
        'longsilog': "url('/longsilog.png')",
        'nugsilog': "url('/nugsilog.png')",

      },
      fontSize: {
        '30': '1.875rem', // Add your custom text size here
      },
    },
  },
  plugins: [],
};
