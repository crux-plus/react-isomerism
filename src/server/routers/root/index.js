// Trie-routing for Koa.
import Router from 'koa-trie-router';

const root = new Router();

root.get('/', async (ctx, next) => {
  ctx.render('Root', {
    path: ctx.path,
  });
});

export default root;
