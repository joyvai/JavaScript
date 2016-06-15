/*
We mentioned the term constructor back in section one, 
when we talked about making an object using the keyword new.
A constructor is a way to create an object.

When we write bob = new Object( ); 
we are using a built-in constructor called Object.
This constructor is already defined by the JavaScript language 
and just makes an object with no properties or methods.

This means we have to add our properties one at a time,
just like we've been doing. To review, 
we've created bob using the constructor 
and defined the name property for you.
*/

// here we make bob using the Object constructor
var bob = new Object();
bob.name = "Bob Smith";
// add bob's age here and set it equal to 20
bob.age = 20;
console.log(bob.name);
console.log(bob.age);
