"use strict";

var map = new Map();

var k1 = ["a"];
var k2 = ["a"];

map
    .set(k1, function () {
        console.log("111");
    })
    .set(k2, function () {
        console.log("222");
    });

map.get(k1)(); // 111
map.get(k2)(); // 222

console.log(map);
