// Expressive middleware for node.js using ES2017 async functions.
import Koa from 'koa';

// A Koa view engine which renders React components on server.
import react from 'koa-react-view';

import path from 'path';

import routers from 'server/routers';

const app = new Koa();

react(app, {
  // The root directory of view files.
  views: path.resolve(__dirname, 'views'),
});

app.use(routers.middleware());

export default app;
