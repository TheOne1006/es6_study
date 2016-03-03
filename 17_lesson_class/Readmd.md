# Class

## Class基本语法

> 概述

1. ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板.
2. 通过class关键字，可以定义类
3. 基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，
4. 新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。


```js
//定义类
class Point {
  // 可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}
```


1. ES6的类，完全可以看作构造函数的另一种写法
2. 类的数据类型就是函数，类本身就指向构造函数.
3. 构造函数的prototype属性，在ES6的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面
4. 类的内部所有定义的方法，都是不可枚举的


> constructor方法

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。

1. 一个类 __必须__ 有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
2. constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

> 实例对象

1. 生成实例对象的写法，与ES5完全一样，也是使用new命令
2. 与ES5一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。


> name属性

由于本质上，ES6的Class只是ES5的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。  
name属性总是返回紧跟在class关键字后面的类名。

> Class表达式

与函数一样，Class也可以使用表达式的形式定义。  

__注意__ 的是，这个类的名字是MyClass而不是Me，Me只在Class的内部代码可用，指代当前类.


```js
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

> 不存在变量提升

Class不存在变量提升（hoist），这一点与ES5完全不同。


> 严格模式

1. 只要你的代码写在类或模块之中，就只有严格模式可用。


## Class的继承

通过`extends`关键字实现继承  

1. `super`关键字，它指代父类的实例（即父类的this对象）。
2. 子类 **必须** 在constructor方法中调用super方法，否则新建实例时会报错。
3. `...args` 传递参数

> 类的`prototype`属性和`__proto__`属性







原生构造函数的继承
Class的取值函数（getter）和存值函数（setter）
Class的Generator方法
Class的静态方法
Class的静态属性和实例属性
new.target属性
Mixin模式的实现
