var score1 = 90;
var score2 = 95;
var highSchool = 75;
var highScore2 = 95;
var comparison = (score1 + score2 ) > (highScore2+highSchool);

// Write the message into the page
var el = document.getElementById('answer');
el.textContent = 'New High Score: ' + comparison;











