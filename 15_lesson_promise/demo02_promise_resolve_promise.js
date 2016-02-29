var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});
p2.then(result => console.log(result));
p2.catch(error => console.log(error));

/**
 * p1是一个Promise，3秒之后变为rejected。
 * p2的状态由p1决定，1秒之后，p2调用resolve方法，但是此时p1的状态还没有改变，因此p2的状态也不会变。
 * 又过了2秒，p1变为rejected，p2也跟着变为rejected
 */
