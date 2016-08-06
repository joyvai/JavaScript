// Create variables for the welcome message

var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order: ';
// Concatenate the three variables above to Create the welcome message

var welcome = greeting + name + message;

// Create variables to hold details about the sign

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update it contents

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubtotal = document.getElementById('subtotal');
elSubtotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping;
// Get the element that has an id of grandTotal then update its contents.
var elGrandTotal = document.getElementById('grandtotal');
elGrandTotal.textContent = '$' + grandTotal;



























