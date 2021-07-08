function returnFive(){
    return 5;
}
returnFive();
//
function isFive(number){
    return number === 5 || number === "5";
}

var enterNumber = prompt("Enter a number");
isFive(enterNumber);
//

function isShortWord(string){
    return string.length < 5;
}
var enterString = prompt("Enter a string, any string");
isShortWord(enterString);
//

function isSameLength(string1, string2){
    return string1.length === string2.length;
}
var enterString1 = prompt("Enter a string");
var enterString2 = prompt("Enter another string");
isSameLength(enterString1, enterString2);
//

function getSmallerSegment(string1, number){
    return string1.substring(0, number).toLowerCase();
}
var enterString3 = prompt("Enter a string");
var howManyLetters = prompt("How many letters should we show");
getSmallerSegment(enterString3, howManyLetters);
//
function addTwoNumbers(num1, num2){
    console.log("The result of num1 + num2 = " + (num1 + num2));
    return num1 + num2;
}

var x = 2, y = 4, a = 5, b = 1, c = 10, d = 5;
addTwoNumbers(x, y);
addTwoNumbers(a, b);
addTwoNumbers(c, d);


