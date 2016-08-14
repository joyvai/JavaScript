// adding items to start and end of list
var list=document.getElementsByTagName('ul')[0];
// ADD New item to end of the list
var newItemLast = document.createElement('li');// create Element
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast); // Add Element end of the list

// ADD new item start of list
var newItemFirst = document.createElement('li');//create element.
var newTextFirst = document.createTextNode('kale');//create text node
newItemFirst.appendChild(newTextFirst); // add text node to element
list.insertBefore(newItemFirst,list.firstChild); // Add element to list

// appendChild() takes one parameter.
// it adds new nodes as a child of the parent element.







