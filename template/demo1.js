// demos/01.js
const Koa = require('koa');
const app = new Koa();

app.listen(3000);


// 打开浏览器，访问 localhost:3000 。你会看到页面显示"Not Found"，表示没有发现任何内容。这是因为我们并没有告诉 Koa 应该显示什么内容。
//详情看demo2.js