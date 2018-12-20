const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.listen(3000);


//在demo5.js的基础上进行的路由封装
// 原生路由用起来不太方便，我们可以使用封装好的koa-route模块
// 上面代码中，根路径/的处理函数是main，/about路径的处理函数是about。

// 运行后，在网页上输入localhost:3000/about,会发现现象