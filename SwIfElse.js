var month = prompt("day is ");

switch(month) {
    case 0:
        if (day === 1 || day == 5){
            console.log("You are 20");
        }
        else{
            console.log("You are 21");
    }
    break;
    case 1:
        if (day === 3 && day > 1){
        console.log("You are 22");}
        else{
            console.log("the day is weird.");
        }
    break;
    case 2:
        if (day === 2){
            console.log('joy you are 23!!Really fuck you man!!');
        }
        else{
            console.log("Happy fucking day baby");
        }
    break;
    default:
        console.log('fuck you!');
        break;

}
