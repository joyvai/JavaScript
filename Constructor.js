function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally =new Person("Sally Bowles",39);
var holden = new Person("Holden Caulfield",16);
console.log("sally's species is " + sally.species + " and she is " + age);
console.log("holden's species is " + holden.species + " and he is " + age);

function student(id,name,blood_group,Major){
    this.id = "14-27234-2";
    this.name = "Chowdhury,Iftekharul islam";
    this.blood_group = "o+";
    this.Major = "BS in CS";
}
var stu = new student;
console.log(stu);
