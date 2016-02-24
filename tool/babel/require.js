require("babel-register");
var example = require('./example.js');

console.log(example);
var foo = example([1,2,3]);
console.log(foo);
