const autoprefixer = require("autoprefixer");
const postcssNesting = require("postcss-nesting");
const tailwindcss = require("tailwindcss");


module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
};
