# 变量的解构赋值

ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

## 数组

```js
var [a, b, c] = [1, 2, 3];
```

1. 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
2. 如果解构不成功，变量的值就等于undefined。
3. 不完全解构, 解构依然可以成功
4. 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
5. 解构赋值不仅适用于var命令，也适用于let和const命令。


## 默认值

1. 解构赋值允许指定默认值
2. 如果默认值是一个表达式，那么这个表达式是 __惰性求值__ 的，即只有在用到的时候，才会求值。

```js
// 默认值
var [foo = true] = [];
foo // true

[x, y = 'b'] = ['a'] // x='a', y='b'
[x, y = 'b'] = ['a', undefined] // x='a', y='b'
```

```js
function f(){
  console.log('aaa');
}

let [x = f()] = [1];
// 因为x能取到值，所以函数f根本不会执行
```

## 对象的解构赋值

解构不仅可以用于数组，还可以用于对象。

```js
var { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo); // "aaa"
console.log(bar); // "bbb"
```

> 与数组结构不同

数组的元素是 __按次序排列__ 的，变量的取值由它的位置决定;  
而对象的属性没有次序，__变量必须与属性同名__ ，才能取到正确的值。  

采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。

## error

```js
// 错误的写法

var x;
{x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
({x} = {x: 1});
```
上面代码的写法会报错，因为JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。
只有 __不将大括号写在行首__ ，__避免JavaScript将其解释为代码块__ ，才能解决这个问题。


## 字符串的解构赋值

字符串也可以解构赋值

```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
let {length : len} = 'hello';
len // 5
```

## 数值和布尔值的解构赋值

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```js
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true

// 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值

let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。  
解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。  
由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。  

## 函数`参数`的解构赋值

函数参数的解构也可以使用默认值。

```js
function add([x, y]){
  return x + y;
}

add([1, 2]) // 3
```

上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。  
对于函数内部的代码来说，它们能感受到的参数就是x和y。




- - - -
