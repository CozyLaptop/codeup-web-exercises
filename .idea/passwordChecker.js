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