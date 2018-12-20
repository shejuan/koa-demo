const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
  console.log('>> one----11');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('7   ------two');
  // next();     // 如果中间件内部没有调用next函数，那么执行权就不会传递下去。作为练习，你可以将two函数里面next()这一行注释掉再执行，看看会有什么结果。
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);


// 多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。

// 最外层的中间件首先执行。
// 调用next函数，把执行权交给下一个中间件。
// ...
// 最内层的中间件最后执行。
// 执行结束后，把执行权交回上一层的中间件。
// ...
// 最外层的中间件收回执行权之后，执行next函数后面的代码。


// 如果中间件内部没有调用next函数，那么执行权就不会传递下去。作为练习，你可以将two函数里面next()这一行注释掉再执行，看看会有什么结果。