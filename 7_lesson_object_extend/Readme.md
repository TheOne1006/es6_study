# 对象的扩展


## 属性的简洁表示法

1. ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
2. 方法也可以简写


```js
var birth = '2000/01/01';

var Person = {
  name: '张三',
  //等同于birth: birth
  birth,
  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }
};
```

## 属性名表达式

JavaScript语言定义对象的属性，有两种方法

1. 直接用标识符作为属性名
2. 用表达式作为属性名

如果使用字面量方式定义对象（使用大括号），在ES5中只能使用方法一（标识符）定义属性.

ES6允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

```js
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

**注意** ，属性名表达式与简洁表示法，不能同时使用，会报错。


```js
// 方法一
obj.foo = true;
// 方法二
obj['a' + 'bc'] = 123;
```

## 方法的name属性
函数的 `name`属性，返回函数名。对象方法也是函数，因此也有`name`属性。

__有两种特殊情况__：
1. bind方法创造的函数，name属性返回“bound”加上原函数的名字；
2. Function构造函数创造的函数，name属性返回“anonymous”。


## Object.is()

> 目的:  （同值相等）算法

ES5比较两个值是否相等，只有两个运算符：
1. 相等运算符（==）和严格相等运算符（===）。
2. 它们都有缺点，前者会自动转换数据类型，
3. 后者的NaN不等于自身，以及+0等于-0。
4. JavaScript缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

ES6提出“Same-value equality”（同值相等）算法

1. Object.is就是部署这个算法的新方法
2. 用来比较两个值是否严格相等，与严格比较运算符（===）的行为 _基本一致_。
3. 不同之处只有两个：一是+0不等于-0，二是NaN等于自身



## Object.assign()

Object.assign()方法用来将源对象（source）的所有 _可枚举_ 属性，复制到目标对象（target）  

语法
Object.assign(target [,source1] [,...sourcen])

1. 它至少需要两个对象作为参数，第一个参数是目标对象，
2. 后面的参数都是源对象。
3. 只要有一个参数不是对象，就会抛出TypeError错误。
4. 多个源对象有同名属性，则后面的属性会覆盖前面的属性
5. 可以用来处理数组，但是会把数组视为对象



## 属性的可枚举性

`Object.getOwnPropertyDescriptor()`方法可以获取该属性的描述对象。

> ES5有三个操作会忽略enumerable为false的属性。

1. for...in 循环：只遍历对象自身的和继承的可枚举的属性
2. Object.keys()：返回对象自身的所有可枚举的属性的键名
3. JSON.stringify()：只串行化对象自身的可枚举的属性

> ES6新增了两个操作，会忽略enumerable为false的属性。

1. Object.assign()：只拷贝对象自身的可枚举的属性
2. Reflect.enumerate()：返回所有for...in循环会遍历的属性
3. ES6规定，所有Class的原型的方法都是不可枚举的

## 属性的遍历

1. for...in
    - for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）
2. Object.keys(obj)
    - Object.keys返回一个数组，
    - 包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
3. Object.getOwnPropertyNames(Obj)
    - 返回一个数组，
    - 包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
4. Object.getOwnPropertySymbols()
    - 返回一个数组，
    - 包含对象自身的所有Symbol属性。
5. Reflect.ownKeys()
    - 返回一个数组，
    - 包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
6. Reflect.enumerate
    - 返回一个Iterator对象，
    - 遍历对象自身的和继承的所有可枚举属性（不含Symbol属性），与for...in循环相同。

> 以上的6种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

1. 首先遍历所有属性名为数值的属性，按照数字排序。
2. 其次遍历所有属性名为字符串的属性，按照生成时间排序。
3. 最后遍历所有属性名为Symbol值的属性，按照生成时间排序


## `__proto__` 属性，Object.setPrototypeOf()，Object.getPrototypeOf()

### `__proto__`

- 读取或设置当前对象的prototype对象。
- 所有浏览器（包括IE11）都部署了这个属性。

1. 该属性没有写入ES6的正文，而是写入了附录，原因是`__proto__`前后的双下划线，  
2. 说明它本质上是一个 **内部属性** ，而不是一个正式的对外的API，只是由于浏览器广泛支持，才被加入了ES6。
3. 只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的
4. 因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。

### Object.setPrototypeOf()

Object.setPrototypeOf方法的作用与设置`__proto__`相同

2. 用来设置一个对象的prototype对象。
3. 它是ES6正式推荐的设置原型对象的方法。

```js
// 格式
Object.setPrototypeOf(object, prototype)

// 用法
var o = Object.setPrototypeOf({}, null);
```

### Object.getPrototypeOf()

与setPrototypeOf方法配套，用于读取一个对象的prototype对象



## Object.values()，Object.entries()

### 过去
ES5引入了Object.keys()方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的 _键名_。


ES7有一个配套 Object.keys() 的 的Object.values() 和Object.entries()

## Object.values()

1. 只返回对象自身的可遍历属性。
2. 方法返回一个数组
3. 会过滤属性名为Symbol值的属性
4. 如果 参数是一个字符串，会返回各个字符组成的一个数组
5. Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组。

## Object.entries()

1. 行为基本与values() 一样
2. Object.entries方法的一个用处是，将对象转为真正的Map结构。


```js
var obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
```

## 对象的扩展运算符
ES7有一个提案，将Rest解构赋值/扩展运算符（...）引入对象  

### Rest解构赋值

1. 由于Rest解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象。
2. Rest解构赋值必须是最后一个参数，否则会报错。
3. Rest解构赋不会拷贝继承自原型对象的属性



```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }


// bad demo
let { x, y, ...z } = null; // 运行时错误
let { x, y, ...z } = undefined; // 运行时错误

let { ...x, y, z } = obj; // 句法错误
let { x, ...y, ...z } = obj; // 句法错误
```



## Object.getOwnPropertyDescriptors()

### 过去
返回某个对象属性的描述对象（descriptor）。

ES7有一个提案，提出了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。

目的: 主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
