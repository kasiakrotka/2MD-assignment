/* eslint-disable no-undef */
const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    "app": "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: 'assets/scripts/'
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase:  path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
