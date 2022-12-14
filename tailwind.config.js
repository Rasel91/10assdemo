module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    axWidth: {
      '3/4': '75%',
    }
  },
  plugins: [require("daisyui")],
}
