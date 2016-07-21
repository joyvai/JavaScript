countries = ['Argentina','China','England'];
for (country in countries){
  console.log(countries[country]);
}


countries = {'country1':'Argentina','country2':'China','country3':'England'};
for (key in countries){
  if (countries.hasOwnProperty(key)){
      console.log(countries[key]);
  }
}
