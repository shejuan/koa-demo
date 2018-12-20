const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('../pages/demo4.html', 'utf8');
};

app.use(main);
app.listen(3000);

// 异步中间件
// 所有例子的中间件都是同步的，不包含异步操作。如果有异步操作（比如读取数据库），中间件就必须写成 async 函数。
// fs.readFile是一个异步操作，必须写成await fs.readFile()，然后中间件必须写成 async 函数