const { loadavg } = require('os');
const path = require('path');
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      // {
      //   test: /\.(css|scss|sass)$/,
      //   use: [
      //     'style-loader', 'css-loader', 'sass-loader'
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /(.html)/,
        loader: 'html-loader'
      },
      {
        test: /(.txt)/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};