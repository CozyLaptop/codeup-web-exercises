"use strict"
function sayHello(name){
    return "Hello " + name;
}
var helloMessage = sayHello("Albert");
console.log(helloMessage);

var myName = "Albert";
sayHello(myName);

var random = Math.floor((Math.random() * 3) + 1);

function isTwo(number){
    return number === 2;
}
console.log(random);
isTwo(random);

function calculateTip(tipPercentage, billTotal){
    return billTotal * tipPercentage;
}

var billTotal = prompt("How much is your bill?");
var tipPercentage = prompt("How much would you like to tip? ex. .10 is 10%");
alert("Please tip " + calculateTip(tipPercentage, billTotal) + "$");

function applyDiscount(originalPrice, discountAmount){
    return (discountAmount * originalPrice) - originalPrice;
}