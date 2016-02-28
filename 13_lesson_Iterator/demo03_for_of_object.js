"use strict";
var someObject = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
};
//
// for (var key of Object.keys(someObject)) {
//     console.log(key + ": " + someObject[key]);
// }


for (let [key, value] of Object.entries(someObject)) {
    console.log(key + ": " + value);
}


/**
 * 类数组
 */
let arrayLike = { length: 2, 0: "a", 1: "b" };

 // 报错
 // for (let x of arrayLike) {
 //     console.log(x);
 // }

 // 正确
for (let x of Array.from(arrayLike)) {
    console.log(x);
}
