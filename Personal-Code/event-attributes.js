/*
line 7 tells if username value is less than 5
then script give me a feedback that Username must be 5 characters or more
if not then else block works.
*/
function checkUsername(){
	var elementMsg = document.getElementById('feedback');
	var elementUsername = document.getElementById('username');
	if (elementUsername.value.length < 5){
		elementMsg.textContent = 'Username must be 5 characters or more';
	}
	else{
		elementMsg.textContent = ''; // That means clear message.
	}
}
