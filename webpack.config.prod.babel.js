// Extract text from bundle into a file.
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// A bundler for javascript and friends. Packs many modules into a few bundled
// assets. Code Splitting allows to load parts for the application on demand.
// Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images,
// JSON, Coffeescript, LESS, ... and your custom stuff. https://webpack.js.org
import webpack from 'webpack';

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
      ...commmon.module.rules,
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,localIdentName="[path][name]__[local]--[hash:base64:5]"'
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
      // Specify the common bundle's name.
      name: 'vendor',
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': JSON.stringify('client'),
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  ],
};
