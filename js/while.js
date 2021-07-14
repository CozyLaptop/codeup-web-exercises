"use strict"
var x = 2;
while (x < 65536){
    console.log(x);
    x *= 2;
}

function sellAllCones(){
    var allCones = Math.floor(Math.random() * 50) + 50;
    var conesSold;
    do {
        conesSold = Math.floor(Math.random() * 5) + 1;
        if (conesSold <= allCones) {
            console.log(conesSold + " cones sold");
            allCones -= conesSold;
            console.log("I have " + allCones + " left.");
        }
        else {
            console.log("I cannot sell you " + conesSold + ", I only have " + allCones)
        }
    }while (allCones > 0);
    console.log("Hey, no more cones! Yay!")
}
sellAllCones();