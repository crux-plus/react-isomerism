// Trie-routing for Koa.
import Router from 'koa-trie-router';

import root from 'server/routers/root';

const routers = new Router();

routers.use(root.middleware());

export default routers;
