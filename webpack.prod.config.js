const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpackBaseConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  ...webpackBaseConfig({
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        hash: true,
        title: "React with Tailwindcss from scratch",
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash].css",
      }),
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        defaultSizes: "gzip",
      }),
    ],
  }),
};
