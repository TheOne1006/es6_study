// 写法一
var promise = new Promise(function(resolve, reject) {
  try {
    throw new Error('test');
  } catch(e) {
    reject(e);
  }
});
promise.catch(function(error) {
  console.log(error);
});

// 写法二
var promise2 = new Promise(function(resolve, reject) {
  reject(new Error('test2'));
});
promise2.catch(function(error) {
  console.log(error);
});


/**
 * --------------------------------------------
 * demo2
 * `throw` 和 `resolve` 谁先谁决定 promise 的状态
 * --------------------------------------------
 */
var promise3 = new Promise(function(resolve, reject) {
  resolve('ok');
  throw new Error('Error promise3');
});
promise3
  .then(function(value) { console.log(value); })
  .catch(function(error) { console.log(error); });


/**
 * --------------------------------------------
 * demo3
 * 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应。
 * --------------------------------------------
 */

var someAsyncThing = ( () => {
  return new Promise(function(resolve, reject) {
   // 下面一行会报错，因为x没有声明
   resolve(x + 2);
  });
});

someAsyncThing().then(function() {
  console.log('everything is great');
});













// -
