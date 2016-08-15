var elementUsername = document.getElementById('username');
var elementMsg = document.getElementById('feedback');

function checkUsername(minLength) {
	if (elementUsername.value.length < minLength) {
		// set the error message
		elementMsg.textContent = 'Username must be ' + minLength + 'characters or more';
	}
	else{
		elementMsg.innerHTML = '';    
	}
}

elementUsername.addEventListener('blur',function(){checkUsername(5);},false);

// here line 14 function is annonymous function.it has no name
// when the addEventListener() function call this time it execute.
