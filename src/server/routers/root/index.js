// Trie-routing for Koa.
import Router from 'koa-trie-router';

const root = new Router();

root.get('/', async (ctx, next) => {
  console.log('ss');
  ctx.body = 'Home';
});

export default root;
