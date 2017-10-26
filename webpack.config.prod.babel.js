// Extract text from bundle into a file.
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// A bundler for javascript and friends. Packs many modules into a few bundled
// assets. Code Splitting allows to load parts for the application on demand.
// Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images,
// JSON, Coffeescript, LESS, ... and your custom stuff. https://webpack.js.org
import webpack from 'webpack';

import path from 'path';

import common from '~/webpack.config.common.babel';

//  In production, our goals shift to a focus on minified bundles, lighter
//  weight source maps, and optimized assets to improve load time. With this
//  logical separation at hand, we typically recommend writing separate webpack
export default {
  // Application common configuration
  ...common,

  // The top-level output key contains set of options instructing webpack on
  // how and where it should output your bundles, assets and anything else you
  // bundle or load with webpack.
  output: {
    ...common.output,

    // This option determines the name of non-entry chunk files. See
    // output.filename option for details on the possible values.
    chunkFilename: '[name].bundle.js',
  },

  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // Webpack plugin for Babel
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.join(__dirname, 'postcss.config.js'),
                },
              }
            },
          ],
        }),
      },
    ],
      // rules for modules (configure loaders, parser options, etc.)
    /* Advanced module configuration (click to show) */
  },

  // list of additional plugins
  plugins: [
    ...common.plugins,

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
    }),
    new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production'),
       }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // Specify the common bundle's name.
      children: true,
      // (select all children of chosen chunks)
      async: true,
      // (create an async commons chunk)
      minChunks: 3,
      // (3 children must share the module before it's separated)
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': JSON.stringify('client'),
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  ],
};
