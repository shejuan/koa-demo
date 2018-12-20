const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);

// Logger （打印日志）功能的实现。
// 中间件的拆离 在demo10.js中将会提到