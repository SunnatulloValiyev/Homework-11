module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      backgroundImage: {
        work: "url('/image/work.png')", 
      },

      screens: {
        'custom': '1200px',
      },
    },
  },
  plugins: [],
};
