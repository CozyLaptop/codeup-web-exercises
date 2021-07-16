function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}

showMultiplicationTable(7);
//////////////////////////////

//generates a random number between and including min and max
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function randomNumbers20200() {
    for (let i = 0; i <= 10; i++) {
        let randomNumber = generateRandomInteger(20, 200);
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is " + "even");
        } else {
            console.log(randomNumber + " is " + "odd");
        }
    }
}

randomNumbers20200();

///////////////////////////
function numberPyramid() {
    let string = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            string = string + i.toString();
        }
        console.log(string);
        string = "";
    }
}

numberPyramid();

//////////////////////////
function countdownByFive() {
    for (let i = 100; i > 0; i - 5) {
        console.log(i);
        i -= 5;
    }
}

countdownByFive();

function isNumeric(input){
    if (typeof input !== NaN){
        return true;
    }
}

function doingJavascriptRightNow(){
    return true;
}
function onMarsRightNow(){
    return false;
}
onMarsRightNow(9);