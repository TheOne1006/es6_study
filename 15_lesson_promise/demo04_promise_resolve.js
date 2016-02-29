/**
 * 作用: 将现有对象转为Promise对象.
 */
'use strict';


/**
 * - - - - - - - - - - -
 * demo1 参数为Promise对象
 * 原封不动地返回这个实例
 * - - - - - - - - - - -
 */
var p1 = new Promise(function (resolve, reject) {
  resolve('success');
});

var resoleveP1 = Promise.resolve(p1);

if(resoleveP1 == p1) {
  console.log(' resoleveP1 == p1 ');
}


/**
 * - - - - - - - - - - -
 * demo2 参数为thenable对象
 * 将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。
 * - - - - - - - - - - -
 */

let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};

let p2 = Promise.resolve(thenable);
p2.then(function(value) {
  console.log(value);  // 42
});

/**
 * - - - - - - - - - - -
 * demo3 参数为原始值对象,或者是一个不具有then方法的对象
 * 则Promise.resolve方法返回一个新的Promise对象，状态为Resolved
 * - - - - - - - - - - -
 */

let p3 = Promise.resolve('p3 succ');
p3.then(function (val) {
  console.log(val);
});
