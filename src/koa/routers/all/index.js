// Trie-routing for Koa.
import Router from 'koa-trie-router';

const root = new Router();

root.use(async (ctx, next) => {
  const {
    path,
  } = ctx;
  ctx.render('entry', {
    path,
  });
});

export default root;
