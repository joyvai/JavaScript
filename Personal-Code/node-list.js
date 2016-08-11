var hotItems = document.querySelectorAll('li.hot'); 

if (hotItems.length > 0) {
	for (var i=0; i < hotItems.length; i++){// Loop throught each item
		hotItems[i].className = 'cool'; 
	}
}
