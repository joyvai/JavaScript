//Here rabbit is a object. 
//AND speak is a method of rabbit object
//object.method()

var rabbit = {};
rabbit.speak = function(line){
  console.log("The rabbit says  '" + line +"'");
};

var horse = {};
horse.speak = function(line){
  console.log("THis horse is '"+line+"'");
}
horse.speak("Awesome");

rabbit.speak("I'm alive.");
console.log(typeof rabbit);

