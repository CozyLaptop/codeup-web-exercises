"use strict"
var numberToSkip = 0;
while(numberToSkip % 2 === 0) {
    numberToSkip = prompt("Enter an odd number");
}
console.log("Number to skip is: " + numberToSkip);
for (var i = 1; i < 50; i+= 2){
    if (parseFloat(numberToSkip) === i){
        console.log("Yikes! Skipping number " + numberToSkip);
    }
    else {
        console.log("Here is an odd number: " + i);
    }
}