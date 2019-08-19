process.title = 'rocket:admin';

const { cpus } = require('os');
const { resolve } = require('path');

const { NoEmitOnErrorsPlugin, EnvironmentPlugin } = require('webpack');
const HappyPack = require('happypack');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const aliases = require('./aliases');

const { NODE_ENV } = process.env;
const IS_PROD = NODE_ENV === 'production';
const IS_DEV = NODE_ENV === 'development';
const IS_TEST = NODE_ENV === 'test';

const DIST = resolve(__dirname, '..', 'build');
const SRC = aliases.appRoot;

const config = {
  context: SRC,
  target: 'web',

  entry: {
    app: aliases.entryPoint
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: aliases
  },

  output: {
    path: DIST
  },

  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] }
          },
          'ts-loader'
        ].filter(Boolean)
      },
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(a?png)$/, use: 'url-loader' },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader']
      }
    ]
  },

  parallelism: 8,

  plugins: [
    new Dotenv(),
    new EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new NoEmitOnErrorsPlugin(),
    new HappyPack({
      threads: cpus().length,
      loaders: ["babel-loader"],
    }),
    new HtmlPlugin({
        template: 'assets/index.html',
        minify: {
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
          useShortDoctype: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true
        },
        append: {
          head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`
        },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    })
  ],

  stats: 'errors-only'
};

module.exports = {
    config,
    IS_DEV,
    IS_PROD,
    IS_TEST,

    DIST,
    SRC
};