// A bundler for javascript and friends. Packs many modules into a few bundled
// assets. Code Splitting allows to load parts for the application on demand.
// Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images,
// JSON, Coffeescript, LESS, ... and your custom stuff. https://webpack.js.org
import webpack from 'webpack';

// Simplifies creation of HTML files to serve your webpack bundles
import HtmlWebpackPlugin from 'html-webpack-plugin';

import path from 'path';

import common from '~/webpack.config.common.babel';

// The goals of development and production builds differ greatly. In
// development, we want strong source mapping and a localhost server with live
// reloading or hot module replacement.
export default {
  // Application common configuration
  ...common,

  // This set of options is picked up by webpack-dev-server and can be used
  // to change its behavior in various ways. Here's a simple example that
  // gzips and serves everything from our dist/ directory:
  devServer: {
    // proxy URLs to backend development server
    proxy: {
      '/api': 'http://localhost:3000'
    },
    // boolean | string | array, static file location
    contentBase: path.join(__dirname, 'public'),
    // enable gzip compression
    compress: true,
    // true for index.html upon 404, object for multiple paths
    historyApiFallback: true,
    // hot module replacement. Depends on HotModuleReplacementPlugin
    hot: true,
    // true for self-signed, object for cert authority
    https: false,
    // only errors & warns on hot reload
    noInfo: true,
    // When open is enabled, the dev server will open the browser.
    open: true,
    // ...
  },

  devtool: 'inline-source-map',
  // This option controls if and how source maps are generated.

  // list of additional plugins
  plugins: [
    ...common.plugins,
    // Simplifies creation of HTML files to serve your webpack bundles
    new HtmlWebpackPlugin({
      // The file to write the HTML to. Defaults to index.html. You can specify
      // a subdirectory here too
      template: 'assets/client/index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': JSON.stringify('client'),
        'NODE_ENV': JSON.stringify('development'),
      },
    })
  ],
};
