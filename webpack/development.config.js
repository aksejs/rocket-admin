
const {
  LoaderOptionsPlugin,
  EnvironmentPlugin,
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
} = require("webpack")
const merge = require("webpack-merge");
const constants = require('./common/contants');
const { SRC, DIST, config } = require("./common/base");

module.exports = merge(config, {
    profile: true,
    devtool: "cheap-module-eval-source-map",
    mode: "development",

    output: {
        filename: "[name].js",
        publicPath: "/",
        path: DIST
    },

    performance: false,

    stats: false,
    plugins: [
      new LoaderOptionsPlugin({
        debug: true,
        minimize: false,
      }),
  
      new EnvironmentPlugin({
        NODE_ENV: "development",
      }),
  
      new NamedModulesPlugin(),
      new HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: SRC,
        hot: true,
        inline: true,
        historyApiFallback: true,
        proxy: {
          '/api': {
              target: `http://${constants.API_HOST}:${constants.API_PORT}`
          },
        },
        stats: 'minimal',
        host: constants.CLIENT_HOST,
        port: constants.CLIENT_PORT,
        clientLogLevel: 'silent'
      }
});