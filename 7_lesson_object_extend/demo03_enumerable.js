"use strict";
let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

/**
 * {
 *  value: 123,
 *  writable: true,
 *  enumerable: true,
 *  configurable: true
 * }
 * 描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。
 */
