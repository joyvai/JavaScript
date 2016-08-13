var itemTwo = document.getElementById('two');// Get second list item
var elText = itemTwo.firstChild.nodeValue; //  Get its text content
elText = elText.replace('pine nuts','kale');//change the value
itemTwo.firstChild.nodeValue = elText; // Update the list item


var itemOne = document.getElementById('one');
var elText = itemOne.firstChild.nextSibling.nodeValue;
elText = elText.replace('figs','joy');
itemOne.firstChild.nextSibling.nodeValue = elText;
