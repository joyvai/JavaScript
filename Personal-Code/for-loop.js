var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;// This is actually counter
// This variable uses inside the loop because this var count
// how many times loops round.
var msg = '';
var i;

// Loop through the items in the arrayLength

for(i = 0; i < arrayLength; i++){
	// Arrays are zero based (so 0 is round 1)
	// Add 1 to the current round
	roundNumber = (i + 1);
	// Write the current round to message
	msg += 'Round ' + roundNumber + ': ';

	// Get the score from the scores array
	msg += scores[i] + '<br />'
}

document.getElementById('answer').innerHTML = msg;











