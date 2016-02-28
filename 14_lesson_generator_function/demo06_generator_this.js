"use strict";
function* g() {}
this.a = "11";

g.prototype.hello = function () {
    return "hi!";
};

let obj = g();

console.log( obj instanceof g ) ;// true
console.log( obj.hello() ); // 'hi!'

/**
 * 上述代码证明: Generator函数g返回的遍历器obj，是g的实例，而且继承了g.prototype
 * --------------------------------------------------------
 * 但是，如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象。
 *
 */
console.log( obj.a ); // undefined
