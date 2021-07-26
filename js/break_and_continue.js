"use strict"
var numberToSkip = 0;
while(numberToSkip % 2 === 0) {
    numberToSkip = prompt("Enter an odd number");
}
console.log("Number to skip")
for (var i = 0; i > 0; i++){
    if (i === numberToSkip){
        console.log("Yikes! Skipping number " + numberToSkip);
        continue;
    }
    console.log("Here is an odd number: " + i);
}