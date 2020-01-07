const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.js"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss, require("postcss-clean")]
      : []),
  ],
}
