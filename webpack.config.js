const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  context: SRC_DIR,
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:9003',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.jsx',
  ],
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js',
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
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}},
        ],
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
              outputPath: 'fonts/',
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
    new webpack.LoaderOptionsPlugin({minimize: true}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    quiet: false,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    port: 9003
  },
  devtool: 'eval-source-map'
};