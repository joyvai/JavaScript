/*
Properties

Properties are like variables that belong to an object, 
and are used to hold pieces of information.
Properties can be accessed in two ways:
Dot notation, with => ObjectName.PropertyName
Bracket notation, with ObjectName["PropertyName"] (don't forget the quotes!)
*/
var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species;
    
// use bracket notation for snoopy's age
var age = snoopy["age"];

var books = new Object();
books.name = "You don't know js";
books.id = 1;
books.coverColor = 'blue';

var bookName = console.log(books.name);
var b_Id = console.log(books["id"]);
var b_coverColor = console.log(books.coverColor);
