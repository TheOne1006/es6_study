
// ES5只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

// 第一种场景，内层变量可能会覆盖外层变量。

var foo = new Date();

function f() {
    console.log(foo);

    if(false) {
        var foo = "tmp";
    }

}

/**
 * 原因在于变量提升，导致内层的tmp变量覆盖了外层的foo变量。
 */
f(); // undefined


// 第二种场景，用来计数的循环变量泄露为全局变量。

var s = "hello";

for (var i = 0; i < s.length; i++){
    // console.log(s[i]);
}

console.log(i); // 5
