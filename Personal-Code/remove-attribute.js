// To remove an attribute from an element
// first select the element
// then call removeAttribute()
// this function takes one parameter.
// The name of the attribute to remove.
// Before remove the attribute you have to check if the attribute exists.

var firstItem = document.getElementById('one'); // Get the first firstItem
if (firstItem.hasAttribute('class')) {
	firstItem.removeAttribute('class');
}

var secondItem = document.getElementById('two');
if (secondItem.hasAttribute('class')){
	secondItem.removeAttribute('class');
}
