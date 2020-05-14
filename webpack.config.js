const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],

  // Выходной файл
  output: {
    filename: './js/[name].[contenthash].js',
    // filename: './js/index.js',
    path: path.resolve(__dirname, "dist")
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  // // убираем дублирование кода
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // },

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader']
      // },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader?name=./fonts/[name].[ext]'
        }, ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [{
          loader: 'file-loader?name=./static/[name].[ext]'
        }, ]
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'CPS service',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),


    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      // filename: 'style.css',
      filename: '[name].[contenthash].css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin([{
      from: './src/img',
      to: 'img',
    },{
      from: './src/lib',
      to: 'lib',
    } ]),

    // clean dist
    new CleanWebpackPlugin()
  ],
};
