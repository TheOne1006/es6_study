var promise = new Promise(function(resolve, reject) {
    var value = "success";
    if (true){
        resolve(value);
    } else {
        reject(error);
    }
});

// Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。
promise.then(function(value) {
    console.log(value);
}, function(value) {
    console.log("err");
});



function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
    });
}

// timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。
// 过了指定的时间（ms参数）以后，Promise实例的状态变为Resolved，就会触发then方法绑定的回调函数。
timeout(3000).then((value) => {
    console.log(value);
});
