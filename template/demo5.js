const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);

// 原生路由
// 网站一般都有多个页面。通过ctx.request.path可以获取用户请求的路径，由此实现简单的路由

// 运行后，在网页上输入localhost:3000/index,会发现现象