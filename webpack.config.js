const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); webpack4.x不适合用了，用mini-css-extract-plugin代替
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = env => {
  // 规则配置
  const rules = [
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        env.NODE_ENV === 'development'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        env.NODE_ENV === 'development'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [Autoprefixer()]
          }
        },
        'less-loader'
      ]
    }
  ];

  const plugins = {
    development: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        injetc: 'body'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],
    production: [
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: '[name].min.css'
      }),
      new OptimizeCssAssetsWebpackPlugin(), // 压缩提取的css文件
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        injetc: 'body'
      }),
      new BundleAnalyzerPlugin()
    ],
    test: [new BundleAnalyzerPlugin()]
  };

  const webpackConfig = {
    entry: {
      index: './src/index.js'
    },
    devtool: 'nosources-source-map',
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [...rules]
    },
    // 优化
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: 'all',
        minChunks: 2
      }
    },

    // 插件
    plugins: [
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(env.NODE_ENV)
      }),
      ...plugins[env.NODE_ENV]
    ]
  };

  // 是否是开发模式
  if (env.NODE_ENV === 'development') {
    webpackConfig.devServer = {
      hot: true,
      hotOnly: true
    };
  }
  console.log(webpackConfig);
  return webpackConfig;
};
