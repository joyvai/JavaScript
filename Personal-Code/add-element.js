// Create a new element and store it in a variable
var newEl = document.createElement('li');
//create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');
// Attach the new text node to the new element.
newEl.appendChild(newText);
// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];
//Insert the new element  into its position.
position.appendChild(newEl);


var newElement = document.createElement('li');
var newTextOne = document.createTextNode('shakaLaka!');
newElement.appendChild(newTextOne);
var place = document.getElementsByTagName('ul')[0];
place.appendChild(newElement);
