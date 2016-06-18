var Population = {
  place: "ctg",
  population: 33333333,
  mayor: "Nazir",
  president:"abdul hamid khan"
  
};

for (var i in Population){
  console.log(Population[i]);
  
}

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (var nycValue in nyc){
    console.log(nyc[nycValue]);    
}
