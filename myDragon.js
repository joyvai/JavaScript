// a variable to check if we're still slaying
var slaying = true;
// This youHit saves a random number which is 0 or 1.
// 0=false and 1=true
var youHit = Math.floor(Math.random()*2);
// this damageThisRound saves a number 1 to 5 (including 5)
var damageThisRound=Math.floor(Math.random()*5+1)
var totalDamage = 0;

while (slaying){
    slaying = false;
    if(youHit === 1){
        console.log("You hit the dragon!");
        totalDamage+=damageThisRound;
            if (totalDamage >= 4){
                console.log("You win!");
                slaying=false;
                }
            else{
                youHit=Math.floor(Math.random()* 2);
            }
    }
    else{
        console.log("The dragon defeated you!");
        slaying=false; 
    }
    
}

