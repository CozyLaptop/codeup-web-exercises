console.log("Hello from external js!")
alert("Welcome to my website");

var userColor = prompt("What's your favorite color?")
if (userColor === "blue"){
    alert("Great! My favorite color is blue too!")
}

var littleMermaidDays = prompt("How many days are you renting Little Mermaid?");
var brotherBearDays = prompt("How many days are you renting Brother Bear?")
var herculesDays = prompt("How many days are you renting Hercules")
var pricePerDay = prompt("How much does it cost per day to rent?");
var totalPriceForMovies = (littleMermaidDays * pricePerDay) + (brotherBearDays * pricePerDay) + (herculesDays * pricePerDay);
alert("Price will be " + totalPriceForMovies)

var googlePay = prompt("How much does Google pay per hour?")
var facebookPay = prompt("How much does Facebook pay per hour?")
var amazonPay = prompt("How much does Amazon pay per hour?")
var googleHours = prompt("How many hours did you work at Google?")
var facebookHours = prompt("How many hours did you work at Google?")
var amazonHours = prompt("How many hours did you work at Google?")

var totalPay = ((googlePay * googleHours) + (facebookPay * facebookHours) + (amazonPay + amazonHours));
alert("Your total pay is " + totalPay);

function classScheduler(){
    if(!classFull || !conflictWithSchedule){
        addClass()
    }
    else{
        alert("Class is full or conflicts with schedule.")
    }
}

var howManyItems = prompt("How many items do you have?");
var areYouPremium = confirm("Are you a Premium member? If so, please click \'OK\'. If not, click \'Cancel\'.");
var validOffer = confirm("Is the offer valid? If so, please click \'OK\'. If not, click \'Cancel\'.")
if (areYouPremium && validOffer || howManyItems >= 2 && validOffer) {
    alert("Offer has been applied.");
} else {
    alert("I'm sorry. We cannot apply this offer.");
}

var username = 'codeup';
var password = 'notastrongpassword';

if (password.length < 5){
    moreThan5 = false;
} else { moreThan5 = true}
if (password == username){
    sameAsUsername = true
} else { sameAsUsername = false}
if(username > 20){
    morethan20 = true
} else {moreThan20 = false}
if (username.indexOf(" ") >= 0 || password.indexOf(" ") >= 0){
    hasWhitespace = true
} else {hasWhitespace = false}