
// 截取整数
console.log( Math.trunc(4.1) ); // 4
console.log( Math.trunc(-0.00) ); // -0

Math.trunc("123.45"); // 123

Math.trunc(NaN);      // NaN
Math.trunc("foo");    // NaN
Math.trunc();         // NaN



/**
 * Math.clz32()
 * 返回一个数的32位无符号整数形式有多少个前导0
 */
console.log( Math.clz32(0) );
// 等价于
console.log( Math.clz32(0b00000000000000000000000000000000) );

Math.clz32(1000); // 22
Math.clz32(0b01000000000000000000000000000000); // 1

// 左移运算符（<<）与Math.clz32方法直接相关。

Math.clz32(1); // 31
Math.clz32(1 << 1); // 30
Math.clz32(1 << 2); // 29








//- end
