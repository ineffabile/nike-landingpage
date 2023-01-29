module.exports = {
  content: [
    "./pages/**/*.{tsx, ts}", 
    "./pages/api/*.{tsx, ts}", 
  ],
  theme: {
    extend: {
      fontFamily: {
         Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        Main: "#f97b89",
        MainDark: "#de566b",
        Dark: "#181818",
      },
    },
  },
  plugins: [],
}
