module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      xxl: "1920px",
    },
    colors: {
      "primary-color": "#9146ff",
      "secondary-color": "#f0f0ff",
      "secondary-color-25": "#f0f0ff40",
      "black-40": "#00000066",
      "gray-color": "#707070",
    },
    extend: {
      spacing: {
        container: "44px",
      },
    },
  },
  plugins: [],
};
