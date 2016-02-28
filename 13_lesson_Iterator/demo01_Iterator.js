/**
 * 模拟Iterator 结构
 */
var it = makeIterator(["a", "b"]);

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: undefined, done: true }

function makeIterator(array){
    var nextIndex = 0;
    return {
        next: function(){
            return nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {value: undefined, done: true};
        }
    };
}


var arr = ["a", "b", "c"];
// 原生Iterator接口
// 调用这个Symbol.iterator属性，就得到遍历器对象。
var iter = arr[Symbol.iterator]();

console.log( iter.next() );  // { value: "a", done: false }
console.log( iter.next() );  // { value: "b", done: false }
console.log( iter.next() );  // { value: "c", done: false }
console.log( iter.next() );  // { value: undefined, done: true }
