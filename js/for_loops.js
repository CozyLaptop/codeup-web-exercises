function showMultiplicationTable(number){
    for(var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}
showMultiplicationTable(7);
//////////////////////////////

//generates a random number between and including min and max
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}

function randomNumbers20200(){
    for(let i = 0; i <= 10; i++){
        let randomNumber = generateRandomInteger(20, 200);
        if(randomNumber % 2 === 0) {
            console.log(randomNumber + " is " + "even");
        }
        else{
            console.log(randomNumber + " is " + "odd");
        }
    }
}
randomNumbers20200();

///////////////////////////