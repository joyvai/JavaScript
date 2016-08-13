var firstItem = document.getElementById('one');// Find first list item
var showTextContent = firstItem.textContent; // get value of textContent
var showInnerText = firstItem.innerText;// Get value of innerText.

var msg = '<p>textContent: ' + showTextContent + '</p>';
	msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread' // Update the first item









