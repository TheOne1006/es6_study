function* helloWorldGenerator() {
    console.log("hello");
    yield "hello";
    console.log("world");
    yield "world";
    console.log("ending");
    return "ending";
}

var hw = helloWorldGenerator();

console.log(typeof helloWorldGenerator); // function
console.log(typeof hw); // object

console.log("- - - -");

console.log( hw.next() );
console.log( hw.next() );
console.log( hw.next() );
console.log( hw.next() );
