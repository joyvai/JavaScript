function checkUsername(){
	var elementMsg = document.getElementById('feedback');
	if (this.value.length < 5) {
		elementMsg.textContent = 'Username must be 5 characters or more.';
	}
	else {
		elementMsg.textContent = ' ';
	}
}



var elementUsername = document.getElementById('username');
elementUsername.onblur = checkUsername;







