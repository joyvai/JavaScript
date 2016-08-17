// Code start line number 32
// When you focus on the create username field
// this time tipUsername() function works and give you a hint.
// when this field goes to blur, this time checkUsername() works.
// open the console .you see the different.

function checkUsername(){
	// When i go to the password bar this time it gives me the warning
	// this time warning class appear and tip class gone 
	// show me the warning message
	var username = element.value; // store username in variable
	if (username.length < 5){
		elementMsg.className = 'Warning'; // change class on message
		elementMsg.textContent = 'Not long enough, yet.....'; //update message
	}else{
		elementMsg.textContent = '';
	}
}

function tipUsername() {
	// when i click the username bar ,this time tip classname shown
	// and give me a tip
	elementMsg.className = 'tip'; // Change class for message
	elementMsg.innerHTML = 'Username must be at least 5 characters';// Add message
}
// The code starts here.
// Then element variable calls checkUsername().
// When user puts username in the username bar this time at first
// time it gives a tip .I mean in the browser it gives me a warning
// actually this time checkUsername() function works.

var element = document.getElementById('username');// username input
var elementMsg = document.getElementById('feedback'); // Element to hold message

// When the username input gains / loses focus call functions above:
element.addEventListener('focus',tipUsername,false);//focus call tipUsername()
element.addEventListener('blur',checkUsername,false); // blur call checkUsername()
