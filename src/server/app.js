// Expressive middleware for node.js using ES2017 async functions.
import Koa from 'koa';

// A Koa view engine which renders React components on server.
import react from 'koa-react-view';

// Development and Hot Reload Middleware for Koa2
import webpack from 'koa-webpack';

import path from 'path';

import routers from 'server/routers';

const app = new Koa();

react(app, {
  // The root directory of view files.
  views: path.resolve(__dirname, 'views'),
});

app.use(webpack({
  // Should you rather that the middleware use an instance of webpack
  // configuration that you've already required/imported, you can pass it to
  // the middleware using this option.
  config: require('~/webpack.config.ssr.babel').default,
  // The dev property should contain options for webpack-dev-middleware, a
  // list of which is available at webpack-dev-middleware. Omitting this
  // property will result in webpack-dev-middleware using its default options.
  dev: {
    // options for formating the statistics
    stats: { colors: true },
    // public path to bind the middleware to use the same as in webpack
    publicPath: '/',
    // Turn off the server-side rendering mode. See Server-Side Rendering part
    // for more info.
    serverSideRender: true,
  },
}));

app.use(routers.middleware());

export default app;
