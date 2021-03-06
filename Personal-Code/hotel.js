// The script is placed inside an immediately invoked function
// expression which helps protect the scope of variables

(function(){
	//part one: create hotel object and write out the offer details
	var hotel ={
		name: 'Radison',
		roomRate: 240, //Amount in dollars
		discount: 15,//percentage in discount.
		offerPrice: function(){
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		}
	}

//Write out the hotel name,standard rate,and the special rate
var hotelName,roomRate,specialRate; // Declare variables 

hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate'); // Get elements
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name //Write hotel name
roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // write room rate
specialRate.textContent ='$ ' + hotel.offerPrice(); //write offer price

//Part Two: Calculate and write out the expiry details for the offer.

var expiryMsg; // Message displayed to users
var today; //Today's date
var elEnds; // The element that shows the message about the offer ending

function offerExpires(today){
	// Declare variables within the function for local scope

	var weekFromToday, day, date ,month,year,dayNames, monthNames;
	// Add 7 days time (added in milliseconds)
	weekFromToday = new Date(today.getTime() + 7 * 24 * 3600*1000);
	//Create arrays to hold the names of days / months

	dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	monthNames = ['January','February','March','April','May','June','July','August',
				    'September','October','November','December'];

	// Collect the parts of the date to show on the page
	day = dayNames[weekFromToday.getDay()]
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	// create the message
	expiryMsg ='Offer expires next ';
	expiryMsg += day + '<br/>(' + date+' ' +month + ' ' + year+ ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

//Finish the immediately invoked function expression

}());
