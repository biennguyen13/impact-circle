const plugin = require("tailwindcss/plugin")

module.exports = {
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      const isSP = `@media (max-width: ${theme("screens").md})`
      addBase({
        html: {
          color: theme("colors.black"),
        },
        "*": {
          fontFamily: `"Noto Sans JP", sans-serif !important`,
        },
      })
      addComponents({})
      addUtilities({})
    }),
  ],
}
