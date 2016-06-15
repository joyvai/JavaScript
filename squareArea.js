var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4; // 6 * 4 = 24
};
// help us define an area method here
square.calcArea = function(){
    return this.sideLength*this.sideLength; // 36   
};

var p = square.calcPerimeter();
var a = square.calcArea();

console.log(p);
console.log(a);
