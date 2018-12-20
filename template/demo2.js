// demos/01.js
const Koa = require('koa');
const app = new Koa();
const main = ctx => {
  ctx.response.body = 'Hello World';
}

app.use(main);
// 下同
// app.use(function(ctx){
//   ctx.response.body = 'Hello World';
// });

app.listen(3000);

// 注解：
// Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

// Context.response.body属性就是发送给用户的内容。

// 上面代码中，main函数用来设置ctx.response.body。然后，使用app.use方法加载main函数。

// 你可能已经猜到了，ctx.response代表 HTTP Response。同样地，ctx.request代表 HTTP Request。

// 运行这个 demo。