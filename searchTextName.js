/*jshint multistr:true */

var  text = 'Hi,I am JOY.Joy is a programmer.';
var myName = "JOY";
var hits = [];
for (var i = 0; i < text.length; i++){
        if (text[i] === myName[0]) {
            for(var j = i; j < (myName.length+i); j++){
                hits.push(text[j]);
            }
        }
    }

if (hits === "JOY"){
    console.log(hits);
}
else{
    console.log("Your name wasn't found!");    
}

/*
Regarding 5/7. First of all, if you go to 1/7 you will see the whole code there. That will help you compare what you are doing with what they are expecting.

In this program there will be two loops. The purpose of the inner loop is to output the word we are looking for once the outer loop finds it.

At the end of the searched word, the inner loop stops looping and the outer loop takes over again continuing through the data in text until it reaches the end of text.

On 3/7 the first loop was initialized:

for(i=0; i<text.length; i++){
 }
That will make JavaScript iterate through all the characters of the variable text.

On 4/7 a condition is added to the loop so that JavaScript knows why it is looping.

The idea is for JavaScript to look at each character of text on the count of i and, if it finds a character that matches the first character of the word we are searching for, it should temporarily stop and do something else which will be stated on lesson 5/7. 
Here I'm searching for "Tony"

for(i=0; i<text.length; i++){
    if(text[i] === 'T'){
     }
}
Note: here we could do if(text[i] === myName[0]) which is the same as above and it is more portable.

So on 5/7, when the first loop finds the first character of the variable myName, we want JavaScript to loop for a specific number of characters (the length of the word we want) and output its results. In order to limit this looping to the length of myName we create an inner loop which temporarily reads just for the length of the word we are looking for.

if (text[i] == "T") {
for (var j = i; j < (myName.length + i); j++) {
The reason to use j ( or any other label) is to be independent from i. This loop will only go around for the length of myName. The reason why we code + i is to give JavaScript a reference in relation to the whole variable text. JavaScript is being guided by the outer loop, not by the inner loop. The inner loop is just an exception, or a detour. JavaScript is being guided by i. That's why we say myName.length + i. In other words, if myName starts at position 4 and the word is 3 characters long, JavaScript will keep counting 4, 5, 6 because it is its global reference. That's why we must add + i (or + the initial position of i).

Since we have found the word we were looking for, we now tell JavaScript to start pushing characters into the array hits so that we can later output them.

Here we code:

hits.push(text[j]);
Which means to copy each character from text to the array hits[ ] at the count of j and for as long as j exists (the length of myName).

And the whole script should look like this:

for (var i = 0; i < text.length; i++) {

    if (text[i] == "T") {
    for (var j = i; j < (myName.length + i); j++) {
    hits.push(text[j]);
        }
      }

*/
