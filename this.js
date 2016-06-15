// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
console.log("Before Updated bob age:",bob.age);
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

console.log ("before Updated susan age:",susan.age);// Before updating
// here, update Susan's age to 35 using the method
susan.setAge(35);
console.log("After Updated susan age:",susan.age); // Now susan age is 35 because we updated.

bob.setAge(40);
console.log("After Updated bob age:",bob.age);
