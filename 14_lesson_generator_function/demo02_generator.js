function* gen(){
  // some code
}

var g = gen();

/**
 * 遍历器对象本身也有Symbol.iterator方法，执行后返回自身。
 */
console.log( g[Symbol.iterator]() === g);
// true
