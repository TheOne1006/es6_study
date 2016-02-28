# Generator

> Question:
1. 如何判断generator 函数

## 简介

### 基本概念

1. Generator函数是ES6提供的一种异步编程解决方案，
2. 语法行为与传统函数完全不同

__语法上__:  
1. 可以把它理解成，Generator函数是一个状态机，封装了多个内部状态
2. 执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。
3. 返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。


__形式上__:  
1. Generator函数是一个普通函数，但是有两个特征。
2. 一是，function命令与函数名之间有一个星号；
3. 二是，函数体内部使用yield语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）


### 调用  
1. Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号
2. 不同的是，调用Generator函数后，该函数并`不执行`，返回的也`不是函数运行结果`，而是一个指向内部状态的指针对象，也就是`遍历器对象`
3. 必须调用`遍历器对象`的next()方法，使得指针移向下一个状态.
    - 每次调用next()方法，内部指针就从 _函数头部_ 或 _上一次停下来的地方_ 开始执行，直到遇到下一个yield语句（或return语句）为止。
    - 换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。

### yield语句

由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield语句就是暂停标志.

> 遍历器对象的next方法的运行逻辑如下:

1. 遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
2. 下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句
3. 如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值
4. 如果该函数没有return语句，则返回的对象的value属性值为undefined
4. 需要注意的是，yield语句后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为JavaScript提供了手动的“惰性求值”（Lazy Evaluation）的语法功能.

__注意__:

1. 普通函数: yield语句不能用在普通函数中
2. 表达式: yield语句如果用在一个表达式之中，必须放在圆括号里面
3. 用作函数参数或赋值表达式的右边，可以不加括号

### 与Iterator接口的关系

任意一个对象的Symbol.iterator方法，等于该对象的遍历器对象生成函数，调用该函数会返回该对象的一个遍历器对象
遍历器对象本身也有Symbol.iterator方法，执行后返回自身



## next方法的参数

1. yield句本身没有返回值，或者说总是返回undefined。
2. next方法可以带一个参数，该参数就会被当作 __上一个yield__ 语句的返回值。


- 由于next方法的参数表示上一个yield语句的返回值，所以第一次使用next方法时，不能带有参数。
- V8引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。
- 从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数


## for...of循环


Generator.prototype.throw()
Generator.prototype.return()

## yield*语句

如果在Generater函数内部，调用另一个Generator函数，默认情况下是没有效果的。

## 作为对象属性的Generator函数

```js
let obj = {
  * myGeneratorMethod() {
    ···
  }
};

// 等价
let obj = {
  myGeneratorMethod: function* () {
    // ···
  }
};
```

## Generator函数的this

1. Generator函数 __总是__ 返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，也继承了Generator函数的prototype对象上的方法。
2. Generator函数g返回的遍历器obj，是g的实例，而且继承了g.prototype。
3. 但是，如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象。




## Generator函数推导 ??


## 含义


应用
