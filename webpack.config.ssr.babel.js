// A bundler for javascript and friends. Packs many modules into a few bundled
// assets. Code Splitting allows to load parts for the application on demand.
// Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images,
// JSON, Coffeescript, LESS, ... and your custom stuff. https://webpack.js.org
import webpack from 'webpack';

import path from 'path';

import common from '~/webpack.config.common.babel';

// The goals of development and production builds differ greatly. In
// development, we want strong source mapping and a localhost server with live
// reloading or hot module replacement.
export default {
  // Application common configuration
  ...common,

  entry: './src/server/entry', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  //
  // The top-level output key contains set of options instructing webpack on
  // how and where it should output your bundles, assets and anything else you
  // bundle or load with webpack.
  output: {
    ...common.output,

    // This option determines the name of non-entry chunk files. See
    // output.filename option for details on the possible values.
    chunkFilename: '[name].bundle.js',
  },

  // list of additional plugins
  plugins: [
    ...common.plugins,
    // Simplifies creation of HTML files to serve your webpack bundles
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': JSON.stringify('server'),
        'NODE_ENV': JSON.stringify('development'),
      },
    })
  ],
};
