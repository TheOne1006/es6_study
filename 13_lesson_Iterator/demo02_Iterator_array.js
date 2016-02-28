"use strict";
const arr = ["red", "green", "blue"];
let iterator  = arr[Symbol.iterator]();

for(let v of arr) {
    console.log(v); // red green blue
}

/**
 * 等价于
 */

for(let v of iterator) {
    console.log(v); // red green blue
}



let fooArr = [3, 5, 7];
fooArr.foo = "hello";

for (let i in fooArr) {
    console.log(i); // "0", "1", "2", "foo"
}

for (let i of fooArr) {
    console.log(i); //  "3", "5", "7"
}
