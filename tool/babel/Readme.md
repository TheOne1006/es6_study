# Babel转码器

简介: 是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。  
这意味着，你可以用ES6的方式编写程序，又不用担心现有环境是否支持.

demo
```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

## 配置文件.babelrc

Babel的配置文件是.babelrc，存放在项目的根目录下

> 第一步  配置`.babelrc`

文件格式:
```json
{
  "presets": [],
  "plugins": []
}
```
presets字段设定转码规则，官方提供以下的规则集.  
可以根据需要安装

> 第二步 安装相关包

```bash
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```

> 第三步，将这些规则加入.babelrc,如

```json
{
	"presets": [
		"es2015",
		"react",
		"stage-2"
	],
	"plugins": []
}
```


## 命令行转码babel-cli

Babel提供babel-cli工具，用于命令行转码。

```bash
# 安装命令, 安装到全局
$ npm install --global babel-cli
```

基本用法
```bash
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

#### 将babel-cli安装在项目之中

```bash
# 安装
$ npm install --save-dev babel-cli
```
改写 package.json

```json
{
	"...":{},
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  },
}
```

转码时需执行

```bash
$ npm run build
```

#### babel-node

babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。  
它不用单独安装，而是随babel-cli一起安装。然后，执行babel-node就进入PEPL环境。

#### babel-register

`babel-register` 模块改写 `require`命令，为它加上 __一个钩子__。
此后，每当使用 `require`加载`.js`、`.jsx`、`.es`和.`es6`后缀名的文件，就会先用Babel进行转码。

```bash
# 安装
$ npm install --save-dev babel-register
```

使用时，必须首先加载 __babel-register__。

```js
require("babel-register");

// 就不需要手动对index.js转码了
require("./index.js");
```

#### babel-core

如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块。


#### babel-polyfill


Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，  
比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。  
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

```bash
npm install --save babel-polyfill
```

然后，在脚本头部，加入如下一行代码。

```js
import 'babel-polyfill';
// 或者
require('babel-polyfill');
```

#### 浏览器环境

Babel也可以用于浏览器环境。但是，从Babel 6.0开始，不再直接提供浏览器版本，而是要用构建工具构建出来。如果你没有或不想使用构建工具，可以通过安装5.x版本的babel-core模块获取。


## 其他工具

__ESLint__ 和 __Mocha__  


#### ESLint

.eslintrc 文件示例：

```json
{
  "env": {
    "browser": true,
  },
  "globals": {
    "angular": true,
  },
  "rules": {
    "camelcase": 2,
    "curly": 2,
    "brace-style": [2, "1tbs"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "space-in-brackets": [2, "never"],
    "space-infix-ops": 2,
  }
}
```

[rules](http://eslint.org/docs/rules/)






- - - -
