# 正则扩展

## RegExp构造函数

ES6允许RegExp构造函数接受正则表达式作为参数，这时会返回一个原有正则表达式的拷贝。

```js
// ES5
var regex = new RegExp("xyz", "i");
var regex = /xyz/i;

/**
 * ES6 新增
 * 如果使用RegExp构造函数的第二个参数指定修饰符，
 * 则返回的正则表达式会忽略原有的正则表达式的修饰符，
 * 只使用新指定的修饰符
 */
var regex = new RegExp(/xyz/i [,flags]);
```

## 字符串的正则方法

字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()
ES6将这4个方法，在语言内部全部调用RegExp的实例方法.


## u修饰符
Unicode模式 ?


## y修饰符 “粘连”（sticky）修饰符

ES6还为正则表达式添加了y修饰符

1. 与 `g` 修饰符相似
    - 全局匹配
    - 后一次匹配都从上一次匹配成功的下一个位置开始
2. 不同于 `g`
    - g修饰符只要剩余位置中存在匹配就可，
    - 而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。





## sticky属性
与y修饰符相匹配，ES6的正则对象多了sticky属性，表示是否设置了y修饰符。


## flags属性
ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符。

```js
// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'
```


## RegExp.escape()

??










- - -
