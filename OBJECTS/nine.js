var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var newWORK in nyc){console.log(newWORK);}

var Person = function(name,id,age,sex,email){
    this.name = name;
    this.id = id;
    this.age = age;
    this.sex = sex;
    this.email = email;
}

var joy = new Person("joy",1,23,'male','joy@example.com');
console.log(joy);
for (var Joy in joy){console.log(Joy);}

