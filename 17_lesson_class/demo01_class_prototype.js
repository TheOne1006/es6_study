'use strict';


/**
 * deom01
 * ---------------------------
 * 类的数据类型就是函数，
 * 类本身就指向构造函数
 * ES6的类，完全可以看作构造函数的另一种写法
 */
class Point{
  // ...
}

console.log( typeof Point); // "function"
console.log(Point === Point.prototype.constructor); // true



/**
 * demo02
 * --------------------------
 * 构造函数的prototype属性，在ES6的“类”上面继续存在.
 * 事实上，类的所有方法都定义在类的prototype属性上面。
 */
class B {
  show() { () => 'tt';}
};
let b = new B();
// 类的实例上面调用方法，其实就是调用原型上的方法
console.log( b.constructor === B.prototype.constructor );
console.log( b.__proto__.show === B.prototype.show );
console.log( b.show === B.prototype.show );
















// -
