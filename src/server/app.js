// Expressive middleware for node.js using ES2017 async functions.
import Koa from 'koa';

import routers from 'server/routers';

const app = new Koa();

app.use(routers.middleware());

export default app;
