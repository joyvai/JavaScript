//This is a Cat constructor

function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(name,color,ear,leg,eyes) {
    this.name = name;
    this.color = color;
    this.ear = ear;
    this.leg = leg;
    this.eyes = eyes;
}

var cat = new Cat(1,'white');
var dog = new Dog('mintu','black',2,4,2);

console.log (cat);
console.log(dog);



function course (subject,sub_id,credit){
    this.subject = subject;
    this.sub_id = sub_id;
    this.credit = credit;
}

var Course = new course("Intro to DataBase",0331,4);
console.log(Course);





