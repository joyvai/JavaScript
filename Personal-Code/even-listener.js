function checkUsername(){
	var elementMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elementMsg.textContent = 'Username must be 5 characters or more';
	}
	else {
		elementMsg.textContent = '';
	}
}

var elementUsername = document.getElementById('username'); // Get username input
// when it loses focus call checkUsername()
elementUsername.addEventListener('blur',checkUsername,false);

// here 'blur' is event
// then function 
// then boolean
// addEventListener() takes three parameter.
