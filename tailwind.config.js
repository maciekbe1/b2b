module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        navy: "#1A4F72",
        logoGreen: "#33B41A",
      },
      screens: {
        mn: { max: "639px" },
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
