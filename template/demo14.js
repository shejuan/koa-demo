const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.throw(500);
};

// 同理404
// const main = ctx => {
//   ctx.response.status = 404;
//   ctx.response.body = 'Page Not Found';
// };

app.use(main);
app.listen(3000);


// 如果代码运行过程中发生错误，
// 我们需要把错误信息返回给用户。HTTP 协定约定这时要返回500状态码。Koa 提供了ctx.throw()方法，用来抛出错误，ctx.throw(500)就是抛出500错误。