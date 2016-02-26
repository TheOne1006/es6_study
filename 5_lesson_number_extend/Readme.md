# 数值扩展

## 二进制和八进制表示法

1. 前缀0b（或0B） 二进制 `0b111110111`
2. 前缀0o（或0O）八进制 `0o767`
3. 从ES5开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6进一步明确，要使用前缀0o表示。
4. 转为十进制 要使用Number方法 `Number('0b111')  // 7`


## Number.isFinite(), Number.isNaN()

1. ES6 Number 新方法, 检查`Infinite`和`NaN`这两个特殊值
2. Number.isFinite() 用来检查一个数值是否非无穷（infinity）。
3. Number.isNaN()用来检查一个值是否为NaN
4. 它们与传统的全局方法isFinite()和isNaN()的区别:
    - 传统方法先调用Number()将非数值的值转为数值，再进行判断
    - 而这两个新方法只对数值有效，__非数值一律返回false__

## Number.parseInt(), Number.parseFloat()

1. 移植: ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
2. 目的: 是逐步减少全局性方法，使得语言逐步模块化

## Number.isInteger()

1. Number.isInteger()用来判断一个值是否为整数
2. 需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

```js
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false
```

## Number.EPSILON

ES6在Number对象上面，新增一个极小的常量Number.EPSILON。

1. 目的: ，在于为浮点数计算，设置一个误差范围



## 安全整数和Number.isSafeInteger()

JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

1. Number.isSafeInteger(): 判断数值是否在精准范围内
2. ES6引入了 `Number.MAX_SAFE_INTEGER(上限)` 和 `Number.MIN_SAFE_INTEGER (下限)` 这两个常量


```js
Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
```

## Math对象的扩展

ES6在Math对象上新增了17个与数学相关的方法。
所有这些方法都是静态方法，只能在Math对象上调用。

1. Math.trunc() 去除小数,返回整数
    - 参数非数值, 使用 Number() 转换
    - 空和无法截取整数返回 NaN
2. Math.sign() 判断整数,负数,还是0
    - 返回值 `+1:整数`, `-1:负数` ,`0:零` ,`-0:-0`, `其他:NaN`
3. Math.cbrt()方法用于计算一个数的立方根。
    - 参数非数值, 使用 Number() 转换
4. Math.clz32(): 返回一个数的32位无符号整数形式有多少个前导0
    - _返回_ 一个数的32位无符号整数形式有多少个前导0
    - JavaScript的整数使用32位二进制形式表示,
    - 对于小数，Math.clz32方法只考虑整数部分。
    - 对于空值或其他类型的值，Math.clz32方法会将它们先转为数值
5. Math.imul(): 返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数
6. Math.fround(): 返回一个数的单精度浮点数形式
    - 对于整数来说，Math.fround方法返回结果不会有任何不同
    - 区别主要是那些无法用64个二进制位精确表示的小数
7. Math.hypot(): 返回 (所有参数的平方和) 的平方根。
    - 执行顺序1,所有参数平方和 , 开根号处理 这个数
    - 如果参数不是数值，Math.hypot方法会将其转为数值。
    - 只要有一个参数无法转为数值，就会返回NaN。
    - demo `Math.hypot(3, 4 [,more]);        // 5`
8. Math.expm1() 对数
9. Math.log1p()
10. Math.log10()
11.  Math.log2()
12. 三角函数方法
    - Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    - Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    - Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    - Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    - Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    - Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
13. 指数运算符 ES7新增了一个指数运算符（`**`）





## 指数运算符

 ES7新增了一个指数运算符（`**`）


```js
let a = 2;
a **= 2;
// 等同于 a = a * a;

let b = 3;
b **= 3;
// 等同于 b = b * b * b;
```


- - -
