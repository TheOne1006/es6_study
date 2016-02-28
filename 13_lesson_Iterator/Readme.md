## Iterator（遍历器）的概念

> 目的:

JavaScript原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6又添加了Map和Set。
用户还可以组合使用它们，定义自己的数据结构,  
这样就需要一种统一的接口机制，来处理所有不同的数据结构。

> 实现:

1. 遍历器（Iterator）就是这样一种机制。
2. 它是一种接口，为各种不同的数据结构提供统一的访问机制。
3. 任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。


> Iterator的作用有三个：

1. 一是为各种数据结构，提供一个统一的、简便的访问接口；
2. 二是使得数据结构的成员能够按某种次序排列；
3. 三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。


__Iterator的遍历过程__:

1. 创建一个指针对象，指向当前数据结构的 _起始_ 位置。也就是说，遍历器对象本质上，就是 _一个指针对象_。
2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
3. 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置。

- 每一次调用`next()方法`，都会返回数据结构的当前成员的信息。
    - 具体来说，就是返回一个包含value和done两个属性的对象。
    - 其中，`value属性` 是当前成员的值，`done属性`是一个布尔值，表示遍历是否结束。


由于Iterator只是把接口规格加到数据结构之上，  
所以，遍历器与它所遍历的那个数据结构，实际上是 _分开的_ ，完全可以写出没有对应数据结构的遍历器对象，  
或者说用遍历器对象模拟出数据结构



## 数据结构的默认Iterator接口

Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环.  
当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。

ES6规定，默认的Iterator接口部署在数据结构的`Symbol.iterator`属性，  
或者说，一个数据结构 __只要具有Symbol.iterator属性__ ，就可以认为是“可遍历的”（iterable）  

调用Symbol.iterator方法，就会得到当前数据结构默认的遍历器生成函数  
Symbol.iterator本身是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为Symbol的特殊值，所以要放在方括号内


在ES6中，有三类数据结构 __原生具备Iterator接口__：`数组`、`某些类似数组的对象`、`Set`和`Map`结构。\

对于这三类数据结构，不用自己写遍历器生成函数

### 对象（Object）没有默认部署Iterator接口，

- 是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定
- 本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换
- 严格地说，对象部署遍历器接口并不是很必要，因为这时对象实际上被当作Map结构使用，ES5没有Map结构，而ES6原生提供了



## Iterator接口与Generator函数

遍历器对象的return()，throw()


## for...of循环

ES6借鉴C++、Java、C#和Python语言，引入了for...of循环，作为`遍历所有数据结构的统一的方法`;  
一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。  
也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。

### 数组

数组原生具备iterator接口，for...of循环本质上就是调用这个接口产生的遍历器，可以用下面的代码证明。

> for...in

JavaScript原有的for...in循环，只能获得对象的键名，不能直接获取键值。ES6提供for...of循环，允许遍历获得键值。


for...of循环调用遍历器接口，数组的遍历器接口`只返回具有数字索引`的属性。
这一点跟for...in循环也不一样。

```js
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); //  "3", "5", "7"
}
```








- - - -