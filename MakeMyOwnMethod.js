// here rectangle is an Object.
// it has two properties: height and width
// 
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth){
    this.width = newWidth;
};
  

// here change the width to 8 and height to 6 using our new methods

rectangle.setHeight(6);
rectangle.setWidth(8);
console.log(rectangle);
console.log("After updated rectangle height method:",rectangle.height);
console.log("After updated rectangle width method:",rectangle.width);
