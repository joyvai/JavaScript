function Two_friends(name,height){
    this.name = name;
    this.height = height;
}

var heightDifference = function(frd1,frd2){
    return frd1.height - frd2.height;
}

var Who_is_taller=function(joy,robin){
    if (joy.height > robin.height){
        return joy.height;
    }
    else{
        return robin.height;
    }
}

var joy = new Two_friends("JOY","5.8 foot");
var robin = new Two_friends ("RObin","5.10 foot");


console.log(Who_is_taller(joy,robin));

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge=function(alice,bob){
    if (alice.age>billy.age){
        return alice.age;
    }
    else{
        return billy.age;
    }

}

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
