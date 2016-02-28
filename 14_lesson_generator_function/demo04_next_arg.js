function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
console.log( a.next() ); // Object{value:6, done:false}
console.log( a.next() ); // Object{value:NaN, done:false}
console.log( a.next() ); // Object{value:NaN, done:true}



var b = foo(5);

console.log( b.next(1123123) ); // {value: 6, done: false}
/**
 * next 参数作为上一个  yield 返回值,但这是第一个所以无效
 */

console.log( b.next(12) ); // {value : 8, done: false}
/**
 * 执行
 * var y = 2 * (12);
 * yield (y/3);
 */


console.log( b.next(13) ); // {value : 42 ,done: true }
/**
 * 执行 var z = 13;
 */
