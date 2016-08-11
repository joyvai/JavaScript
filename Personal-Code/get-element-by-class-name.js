var elements = document.getElementsByClassName('hot');
// here hot is class attribute value.
// getElementsByClassName() takes specific value.
// Find hot items

if (elements.length >= 1){
	// if 3 or more are found
	var el = elements[2]; // select the 3rd from the NodeList
	el.className = 'cool';//Change the value of its class attribute
	var one = elements[1]; // 2nd elements 
	one.className = 'veryCooL' // change the class name.

}
