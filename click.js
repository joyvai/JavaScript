// Create the HTML for the message 
var message = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
message += '<div><h2>System Maintenance</h2>';
message += 'Our servers are being updated between 3 and 4 a.m. ' ;
message += 'During this time, there may be minor disruptions to service.</div>';

var elementNote = document.createElement('div'); // create a new element
elementNote.setAttribute('id','note') // Add an id of note
elementNote.innerHTML = message; 
document.body.appendChild(elementNote);

function dismissNote() {
	document.body.removeChild(elementNote); // Remove the note
}

var elementClose = document.getElementById('close'); // Get the close button
elementClose.addEventListener('click', dismissNote, false); // Click close-clear note










