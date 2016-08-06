// here hotel is a object 
// which represent a hotel called Quay with 40 rooms (25 of which have been booked).
var hotel ={
	name: 'Quay',
	rooms: 40,
	booked: 25,
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
};
//Next the content of this page updated with data from this object.
// It shows the name of the hotel by accessing the object's name property
// and the number of vacant rooms using the checkAvailability() method.
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
