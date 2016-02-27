# 数组扩展

## Array.from()
用于将两类对象转为`真正的数组`

适用对象
- 类似数组的对象（array-like object）
- 可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）


`Array.from(arg, mapFun)`:  
可以将各种值转为真正的数组，并且还提供map功能。

## Array.of()

1. Array.of方法用于将一组值，转换为数组。
2. 目的: 是弥补数组构造函数Array()的不足


```js
/**
 * 因为参数个数的不同，会导致Array()的行为有差异。
 */
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]


// Array.of基本上可以用来替代Array()或new Array()，
// 并且不存在由于参数不同而导致的重载。它的行为非常统一。
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]
```

## 数组实例的copyWithin()

1. 数组实例的copyWithin方法
2. 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
3. 使用这个方法，会修改当前数组。
4. 这三个参数都应该是数值，如果不是，会自动转为数值



```js
// 语法
/**
 * target（必需）：从该位置开始替换数据。
 * start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
 * end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
 */
Array.prototype.copyWithin(target, start = 0, end = this.length)

```



## 数组实例的find()和findIndex()

### find()

1. 数组实例的`find()`方法, 找出 __第一个__ 符合条件 的数组成员
2. `find( callback )` 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员
3. 回调函数可以接受 __三个__ 参数，依次为 _当前的值_、 _当前的位置_ 和 _原数组_
4. 如果没有符合条件的成员，则返回undefined

### findIndex()

1. 数组实例的findIndex方法的用法与find方法非常类似, 回调函数也是相同功能
2. 返回第一个符合条件的数组成员的位置
3. 如果所有成员都不符合条件，则返回-1


### ??
这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足。


## 数组实例的fill()

fill()方法使用给定值，填充一个数组。

1. 数组中已有的元素，会被抹去
2. 参数: fill( fillObject [, start] [, end])


## 数组实例的entries()，keys()和values()

ES6提供三个新的方法: `entries()`，`keys()`和`values()`, 用于遍历数组   

特点:
1. 它们都返回一个遍历器对象
2. 可以用for...of循环进行遍历
3. 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```





数组实例的includes()
数组的空位
数组推导




- - - -
