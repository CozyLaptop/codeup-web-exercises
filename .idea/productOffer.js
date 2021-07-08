
function applyItemOffer() {
    if (premiumMember){
        if (!offerExpired){
            price = itemPrice - (itemPrice * 0.2)
        }
    }
    else if (purchasedItemCount >= 2 && !offerExpired) {
        price = itemPrice - (itemPrice * 0.2)
    }
}

var howManyItems = prompt("How many items do you have?");
var areYouPremium = confirm("Are you a Premium member? If so, please click \'OK\'. If not, click \'Cancel\'.");
var validOffer = confirm("Is the offer valid? If so, please click \'OK\'. If not, click \'Cancel\'.")
if (areYouPremium && validOffer || howManyItems >= 3 && validOffer) {
    alert("Offer has been applied.");
} else {
    alert("I'm sorry. We cannot apply this offer.");
}

- What is a function? (A function is a set of instructions to run in a program)
    - How are functions first-class citizens in JS? (They are dynamic and can be used to achieve a variety of results.)
    - What is the difference between an argument and a parameter? (An argument)
    - What is the difference between a function expression and function declaration?
    - What is the difference between the values stored in the variables in the following statements:
    var x = someFunction();
var y = someFunction;