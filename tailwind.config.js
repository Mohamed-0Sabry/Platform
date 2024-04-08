module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Lalezar: ["Lalezar", "system-ui"],
      },
      colors: {
        mono: {
          dark: "#030303",
          lightbrown: "#83725D",
          darkbrown: "#2E2923",
          camel: "#AD8A5E",
          camoon: "#D89B51",
          yellow: "#FFA435",
        },
        shades: {
          lightest: "#F1D7B7",
          light: "#CFB99E",
          origin: "#2E2923",
          dark: "#AD9B84",
          darker: "#8B7C6A",
          darkest: "#695E50",
        },
      },
    },
  },
  plugins: [],
};
