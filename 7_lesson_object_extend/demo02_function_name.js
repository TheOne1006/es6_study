"use strict";
var person = {
    sayName() {
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas";
    }
};

console.log( person.sayName.name );  // "sayName"
// ?? why is undefined
console.log( person.firstName.name ); // "get firstName"


// ?? null ...
console.log( (new Function()).name ); // "anonymous"

var doSomething = function() {
  // ...
};

// ?? only bound
console.log( doSomething.bind().name); // "bound doSomething"
