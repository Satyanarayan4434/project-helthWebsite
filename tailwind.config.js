/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/assets/cr-1.png')",
        'box-img': "url('/assets/bg-box.png')",
        'box-bg':"url('/assets/bg-box-2.png')",
        'bg-testimonial':"url('/assets/bg-box-3.png')",
      }
    },
  },
  plugins: [],
}
