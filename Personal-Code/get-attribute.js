var firstItem = document.getElementById('one');
if (firstItem.hasAttribute('class')){//if it has class attribute
	var attr = firstItem.getAttribute('class');// Get the attribute
	// Add the value of the attribute after the list 
	var element = document.getElementById('scriptResults');
	element.innerHTML = '<p>The first item has a class name: ' +attr+'</p>';
}
// getAttribute() gets the value of an attribute.
