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
        darkNavy: "#113248",
        logoGreen: "#31B31B",
      },
      screens: {
        mn: { max: "639px" },
        mdlg: { max: "1280px", min: "1024px" },
        maxlg: { min: "1280px" },
      },
      fontSize: {
        sxs: "0.55rem",
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.5rem",
          },
        ],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    transform: ["hover", "focus"],
    zIndex: ["hover", "active"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
