const webpackBaseConfig = require("./webpack.base.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  ...webpackBaseConfig({
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        hash: false,
        title: "React with Tailwindcss from scratch",
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
    ],
  }),
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
  },
};
