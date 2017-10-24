// A bundler for javascript and friends. Packs many modules into a few bundled
// assets. Code Splitting allows to load parts for the application on demand.
// Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images,
// JSON, Coffeescript, LESS, ... and your custom stuff. https://webpack.js.org
import webpack from 'webpack';

// A webpack plugin to remove your build folder(s) before building
import CleanWebpackPlugin from 'clean-webpack-plugin';

import path from 'path';

// While we will separate the production and development specific bits out,
// note that we'll still maintain a "common" configuration to keep things DRY.
// In order to merge these configurations together, we'll use a utility called
// object spread rest. With the "common" configuration in place, we won't have
// to duplicate code within the environment-specific configurations.
export default {
  entry: './src/client/entry', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'bundle.js', // string
    // the filename template for entry chunks

    libraryTarget: 'umd', // universal module definition
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
    ],

    /* Advanced module configuration (click to show) */
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    // directories where to look for modules

    extensions: ['.js', '.json', '.jsx', '.css'],
    // extensions that are used

    alias: {
      // a list of module name aliases

      'client': 'client',
      // alias "client" -> "client" and "module/path/file" -> "new-module/path/file"

      'isomerism': 'isomerism',
      // alias "isomerism" -> "isomerism", but not "only-module/path/file" -> "new-module/path/file"
    },
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  // list of additional plugins
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  /* Advanced configuration (click to show) */
};
