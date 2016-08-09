var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16,1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference/31556900000);
var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
//if you want to find the difference between two dates,you will end up with a 
// result in milliseconds.
//To get the difference in days/weeks/years,you divide this number by the 
// number of milliseconds in a day/week/year
// 31,556,900,000 -the number of milliseconds in a year.(not a leap year)
