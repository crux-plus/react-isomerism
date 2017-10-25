// Trie-routing for Koa.
import Router from 'koa-trie-router';

import all from 'server/routers/all';

const routers = new Router();

routers.use(all.middleware());

export default routers;
