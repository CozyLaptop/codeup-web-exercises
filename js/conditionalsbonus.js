function dayOfTheWeek(){
    var favoriteDay = prompt("What is your favorite day of the week?").toLowerCase();
    if (favoriteDay === "monday"){
        alert("Monday is a fun day");
    } else if (favoriteDay === "tuesday"){
        alert("Tuesday, don't lose day");
    } else if (favoriteDay === "wednesday"){
        alert("Wednesday I'm gunna win day!");
    } else if (favoriteDay === "thursday"){
        alert("Thirsty Thursday");
    } else if (favoriteDay === "friday"){
        alert("Friday Friyay!");
    } else if (favoriteDay === "saturday"){
        alert("Saturday is my favorite day");
    } else if (favoriteDay === "sunday"){
        alert("Sunday, what about daughterday?");
    } else {
        alert("That's not a day of the week where I'm from.");
    }
}
dayOfTheWeek();

function dayOfTheWeekSwitch(){
    var favoriteDay = prompt("What is your favorite day of the week?").toLowerCase();
    switch (favoriteDay){
        case "monday":
            alert("Muddy monday");
            break;
        case "tuesday":
            alert("Tooty Tuesday");
            break;
        case "wednesday":
            alert("Wedding Wednesday");
            break;
        case "thursday":
            alert("Thirty Thursday");
            break;
        case "friday":
            alert("Freaky Friday");
            break;
        case "saturday":
            alert("Fat Saturday");
            break;
        case "sunday":
            alert("Sunny Sunday");
            break;
        default:
            alert("Not a day of the week");
    }
}
dayOfTheWeekSwitch();

function isANumber(){
    var input = parseFloat(prompt("Enter a number or a string"));
    if (isNaN(input)){
        return alert("This is a string");
    }
        alert("This is a number");
}
isANumber();
/////////////////////////////////////

function monthsInSeason(pickedSeason) {
    switch (pickedSeason){
        case "spring":
            return "March, April, May";
        case "summer":
            return "June, July, August";
        case "fall" || "autumn":
            return "September, October, November";
        case "winter":
            return "December, January, February";
        default:
            alert("I don't know that season.");
            return false;
    }
}

function specialMessage(selectedMonth, selectedSeason) {
    if (selectedSeason === "spring") {
        switch (selectedMonth) {
            case "march":
                alert("Get ready for St Patricks day!");
                break;
            case "april":
                alert("Easter is in April");
                break;
            case "may":
                alert("April fools day!");
                break;
            default:
                alert("Unrecognized month");
                break;
        }
    }
    if (selectedSeason === "summer") {
        switch (selectedMonth) {
            case "june":
                alert("Father's day, whoop whoop!");
                break;
            case "july":
                alert("Let's celebrate Canada Day!");
                break;
            case "august":
                alert("Usually when school starts");
                break;
            default:
                alert("Unrecognized month");
                break;
        }
    }
    if (selectedSeason === "fall") {
        switch (selectedMonth) {
            case "september":
                alert("Labor day should be here soon");
                break;
            case "october":
                alert("Scary scary Halloween, trick or treat");
                break;
            case "november":
                alert("I'm ready for some turkey!");
                break;
            default:
                alert("Unrecognized month");
                break;
        }
    }
    if (selectedSeason === "winter") {
        switch (selectedMonth) {
            case "december":
                alert("I love Christmas!");
                break;
            case "january":
                alert("Start of the new year!");
                break;
            case "february":
                alert('Aww Valentines Day "insert heart here"');
                break;
            default:
                alert("Unrecognized month");
                break;
        }
    }
}

function seasonFunction() {
    var pickedSeason = prompt("Type the name of a season").toLowerCase();
    if (monthsInSeason(pickedSeason)) {
        alert(`The months in ${pickedSeason} are ${monthsInSeason(pickedSeason)}`)
        var selectedMonth = prompt(`Pick a month: ${monthsInSeason(pickedSeason)}`).toLowerCase();
        specialMessage(selectedMonth, pickedSeason);
    }
}
seasonFunction();