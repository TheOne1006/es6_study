# Promise对象

## Promise的含义

Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法， _原生_ 提供了Promise对象。

> 目的:

Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。

__Promise对象有以下两个特点__:  

1. 对象的状态不受外界影响。
    - 状态: Promise对象代表一个异步操作，有三种状态：`Pending`（进行中）、`Resolved`（已完成，又称Fulfilled）和 `Rejected`（已失败）。
    - 承诺: 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
    - 状态改变只有两种可能:
    - `Pending` => `Resolved`
    - `Pending` => `Rejected`
    - 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。
    - 就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。


## 基本用法

ES6规定，Promise对象是一个`构造函数`，用来生成Promise实例。

1. Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
2. 它们是两个函数，由JavaScript引擎提供，不用自己部署。
3. resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved）
4. reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected）
5. Promise实例生成以后，可以用then()方法分别指定Resolved状态和Reject状态的回调函数。
6. then方法可以接受两个回调函数作为参数。
    - 第一个回调函数是Promise对象的状态变为Resolved时调用，
    - 第二个回调函数是Promise对象的状态变为Reject时调用。(可选的)



```js
/**
 * Promise构造函数接受一个函数作为参数，
 * 该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由JavaScript引擎提供，不用自己部署
 */
var promise = new Promise(function(resolve, reject) {

});
```




## Promise.prototype.then()

Promise实例具有then()方法，也就是说，then方法是定义在原型对象Promise.prototype上的.

1. then方法的第一个参数是Resolved状态的回调函数，
2. 第二个参数（可选）是Rejected状态的回调函数
3. then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）.
    - 因此可以采用链式写法，即then方法后面再调用另一个then方法


## Promise.prototype.catch()

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

1. Promise抛出一个错误，就被catch方法指定的回调函数捕获。
2. 如果Promise状态已经变成Resolved，再抛出错误是无效的。
3. `throw` 和 `resolve` 谁先谁决定 promise 的状态
4. “冒泡”性质 : Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
5. 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
6. 跟传统的try/catch代码块不同 : 如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误 __不会__ 传递到外层代码，即不会有任何反应。



```js
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
var promise = new Promise(function(resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function(error) {
  console.log(error);
});
```

## Promise.all()
Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。

```js
var p = Promise.all([p1, p2, p3]);
```

1. Promise.all方法接受一个 "数组" 作为参数, 数组元素都是Promise对象的实例
  - 就会先调用Promise.resolve()方法，将参数转为Promise实例
  - Promise.all方法的参数可以不是数组，但`必须具有Iterator接口`，且返回的每个成员都是Promise实例
2. p的状态,分成两种情况。
  - 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled.
  - 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected
3. 返回值
  - all resolve/fulfilled时: p1、p2、p3的返回值组成一个数组，传递给p的回调函数
  - first reject时: 此时第一个被reject的实例的返回值，会传递给p的回调函数

## Promise.race()

Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。

```js
var p = Promise.race([p1,p2,p3]);
```
只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。

1. 方法的参数与Promise.all方法一样，
  - 如果不是Promise实例，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。
2. 状态:
  - 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变
3. 返回值:
  - 那个率先改变的Promise实例的返回值，就传递给p的回调函数.


## Promise.resolve()

作用: 将现有对象转为Promise对象.

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

Promise.resolve方法的参数分成四种情况。

参数情况:
1. 参数是一个Promise实例
  - Promise.resolve将不做任何修改、原封不动地返回这个实例。
2. 数是一个thenable对象
  - thenable对象指的是具有then方法的对象
  - Promise.resolve方法会将这个对象转为Promise对象，然后就`立即执行`thenable对象的`then()方法`
3. 参数不是具有then方法的对象，或根本就不是对象
  - __原始值__: 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved
4. 不带有任何参数
  - 直接返回一个Resolved状态的Promise对象。






## Promise.reject()

Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected。它的参数用法与Promise.resolve方法完全一致。


## 两个有用的附加方法

### done()

Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。

> 实现代码

```js
Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => { throw reason }, 0);
    });
};
```

### finally()

finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。


```js
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
```

## 应用


## async函数
