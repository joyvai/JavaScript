function checkLength (e,minLength) {
	var element,elementMsg;
	if(!e) {
		e = window.event;
	}
	element = e.target || e.srcElement;
	elementMsg = el.nextSibling;

	if (el.value.length < minLength) {
		elementMsg.innerHTML ='Username must be '+minLength + ' characters or more';
	} else {
		elementMsg.innerHTML = '';
	}
}

var elementUsername = document.getElementById('username');
if (elementUsername.addEvenetListener) {
	elementUsername.addEvenetListener('blur',function(e){checkUsername(e,5);},false);
} else {
	elementUsername.attachEvent('onblur',function(e){checkUsername(e,5);});
}
