'use strict';

class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '('+this.x+', '+this.y+')'+' toString in Point';
  };
};

class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    // 调用父类的toString()
    return this.color + ' ' + super.toString();
  }

}

let cp = new ColorPoint(1,2,'red');
console.log( cp.toString() );

console.log( cp instanceof ColorPoint); // true
console.log( cp instanceof Point); // true
