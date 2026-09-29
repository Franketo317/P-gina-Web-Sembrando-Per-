module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      colors: {
        "colecci-n-variable-celeste": "var(--colecci-n-variable-celeste)",
        "colecci-n-variable-verde-agua": "var(--colecci-n-variable-verde-agua)",
        "colecci-n-variable-verde-claro":
          "var(--colecci-n-variable-verde-claro)",
        "colecci-n-variable-VERDE-LIMA": "var(--colecci-n-variable-VERDE-LIMA)",
        "colecci-n-variable-verde-oscuro":
          "var(--colecci-n-variable-verde-oscuro)",
        "colors-backgrounds-primary": "var(--colors-backgrounds-primary)",
        "colors-grays-black": "var(--colors-grays-black)",
        "colors-grays-white": "var(--colors-grays-white)",
      },
    },
  },
  plugins: [],
};
