const os = require("os")
const path = require("path")
const {
  LoaderOptionsPlugin,
  EnvironmentPlugin,
  optimize: { ModuleConcatenationPlugin },
} = require("webpack")
const merge = require("webpack-merge")
const UglifyPlugin = require("uglifyjs-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const { config, DIST } = require("./common")

module.exports = merge(config, {
  mode: "production",
  devtool: "source-map",

  output: {
    path: DIST,
    filename: '[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),

    new EnvironmentPlugin({
      NODE_ENV: "production",
    }),

    new ModuleConcatenationPlugin(),

    new UglifyPlugin({
      parallel: os.cpus().length,
      sourceMap: true,
      uglifyOptions: {
        output: { comments: false },
      },
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: path.resolve(__dirname, "..", "report.html"),
      openAnalyzer: false,
    }),
  ],
});