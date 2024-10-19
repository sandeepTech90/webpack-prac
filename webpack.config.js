const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // The entry point is the file where Webpack starts building the dependency graph. This is typically the main file of your application.
  entry: "./src/index.js",

  //   The output property tells Webpack where to bundle the assets and what to name the bundle.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  //   Webpack can only natively understand JavaScript and JSON files. Loaders allow you to process other file types, such as CSS, images, and even TypeScript, so they can be bundled.
  module: {
    rules: [],
  },

  //   Plugins are used to extend Webpack’s functionality. Some common plugins include HtmlWebpackPlugin to generate an HTML file, and MiniCssExtractPlugin to extract CSS into separate files.
  //   plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],

  //   Webpack has three modes: development, production, and none. The mode you set affects how Webpack optimizes your code. development mode makes debugging easier, while production mode optimizes the bundle for performance.

  mode: "development",
};
