const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  context: SRC_DIR,
  entry: [
    'babel-polyfill',
    './index.jsx'
  ],
  output: {
    path: DIST_DIR,
    filename: 'js/[name].bundle.min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}},
          ],
        }),
      },
      {
        test: /\.(jpe?g|png)$/i,
        include: SRC_DIR,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]?[hash:5]',
              outputPath: 'img/',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)(\?[a-z0-9#=&.]+)?$/,
        include: SRC_DIR,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'css/fonts/',
            },
          },
        ],
      },
    ],
  }, 
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [SRC_DIR, 'node_modules'],
    alias: {
      '@': SRC_DIR,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vladimir Koval',
      filename: 'index.html',
      template: './index.ejs',
      favicon: './favicon.png',
      inject: true,
      hash: true,
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.min.css',
      allChunks: true,
      disable: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      comments: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'js/commons.js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
};
