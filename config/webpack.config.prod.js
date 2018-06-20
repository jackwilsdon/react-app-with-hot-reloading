const { resolve, relative } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const webpack = require('webpack');

module.exports = {
  bail: true,
  devtool: 'source-map',
  context: __dirname,
  entry: ['./polyfills', resolve(__dirname, '../src/index.js')],
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: '/',
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info =>
      relative(resolve(__dirname, '../src'), info.absoluteResourcePath).replace(
        /\\/g,
        '/',
      ),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    plugins: [
      new ModuleScopePlugin(resolve(__dirname, '../src'), [
        resolve(__dirname, '../package.json'),
      ]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
            },
            loader: 'eslint-loader',
          },
        ],
        include: resolve(__dirname, '../src'),
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: resolve(__dirname, '../src'),
            loader: 'babel-loader',
            options: {
              compact: true,
            },
          },
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
                options: {
                  hmr: false,
                },
              },
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: true,
                  },
                },
                'postcss-loader',
              ],
            }),
          },
          {
            loader: 'file-loader',
            exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new StylelintPlugin({ files: ['src/**/*.css'] }),
  ],
};
