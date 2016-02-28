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




Promise.prototype.then()
Promise.prototype.catch()
Promise.all()
Promise.race()
Promise.resolve()
Promise.reject()
两个有用的附加方法
应用
async函数
