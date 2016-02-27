
/**
 * ES6允许直接写入变量和函数
 */

var foo = "bar";
var baz = {foo};
console.log( baz );

 /**
  * 等同于
  * baz = { foo: "bar"}
  */

function f(x, y) {
    return {x, y};
}

console.log(f(1, 2)); // Object {x: 1, y: 2}

/**
 * 等同于
 * function f(x, y) {
 *   return {x: x, y: y};
 * }
 */
