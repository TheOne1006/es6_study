# Proxy和Reflect

## Proxy 代理

Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。  

用在这里表示由它来“代理”某些操作，可以译为“代理器”。

> 构造函数

```js
// target 第一个参数是所要代理的目标对象
// handler 参数也是一个对象，用来定制拦截行为
var proxy = new Proxy(target, handler);
```


## Reflect对象
与Proxy对象一样，也是ES6为了操作对象而提供的新API。Reflect对象的设计目的有这样几个。

> 目的:

1. 将Object对象的一些明显属于语言内部的方法，放到Reflect对象上
2. 修改某些Object方法的返回结果，让其变得更合理
3. 让Object操作都变成函数行为
4. Reflect对象的方法与Proxy对象的方法一一对应
