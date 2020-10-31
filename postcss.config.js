const tailwindcss = require("tailwindcss");
const PurgeCss = require("@fullhuman/postcss-purgecss");
const PurgeOptions = {
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" ? PurgeCss(PurgeOptions) : null,
  ].filter(Boolean),
};
