"use strict";

var arr = [1,3];
for(let i = 0; i < arr.length; i++){}

// console.log(i); // // ReferenceError: i is not defined

for(var j = 0; j < arr.length; j++){}

console.log(j); // 2
