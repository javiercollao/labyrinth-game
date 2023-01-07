const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const package = require("./package.json");

const babelLoaderRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
  }

const tsLoaderRules = {
    test: /\.ts$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

const fileLoaderRules = {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: "file-loader",
      },
    ],
  }

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      babelLoaderRules,
      tsLoaderRules,
      fileLoaderRules 
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 2512000,
    maxAssetSize: 2512000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "phaser",
          enforce: true,
          chunks: "initial",
        },
      },
    },
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/",
          to: "assets/",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      title: package.description,
      inject: "body",
      hot: true,
    }),
  ],
};