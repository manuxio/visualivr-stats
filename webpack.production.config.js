const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line

const config = {
  devtool: 'cheap-module-source-map',

  entry: [
    './index.js'
  ],

  context: resolve(__dirname, 'react-src'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'react-production'),
    publicPath: ''
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new HtmlWebpackPlugin({
    //   template: `${__dirname}/app/index.html`,
    //   filename: 'index.html',
    //   inject: 'body'
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true })
    // new CopyWebpackPlugin([{ from: './vendors', to: 'vendors' }])
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                // camelCase: true,
                // localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                // camelCase: true,
                // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                publicPath: 'assets'
              }
            },
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false
              }
            }
          ]
        }),
        exclude: path.resolve(__dirname, 'node_modules/')
      },
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              query: {
                sourceMap: false
              }
            }
          ]
        }),
        include: path.resolve(__dirname, 'node_modules/')
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                // camelCase: true,
                // localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            { loader: 'less-loader', query: { sourceMap: false } }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/octet-stream',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/svg+xml',
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
