var testText = document.getElementById("test");

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newUsers = users.filter(function(user) {
    return user.languages.length > 2;
});

var mappedUsers = users.map(function(user){
    testText.innerHTML += user.email + "<br>";
    return user.email;
});

// const numbers = [1, 2, 3, 4, 5];

var reducedUsers = users.reduce((totalYears, user) => {
    // console.log(totalYears)
    return totalYears + user.yearsOfExperience;
}, 0);
// console.log(reducedUsers);
testText.innerHTML += "<br>" + reducedUsers;
var longestEmail = users.reduce((longestEmailFromList, user, index) => {
    var tempLanguagesFromUser = "";
    if (longestEmailFromList.length < user.email.length){
        longestEmailFromList = user.email;
    }
    return longestEmailFromList;
}, "0");
testText.innerHTML += "<br>" + longestEmail;

var userNames = users.reduce((username, user, index) => {
    testText.innerHTML += "<br>" + user.name;
    return username + user.name;
}, "");
console.log(userNames)

var languages = users.reduce((uniqueLanguages, user, index) => {
    user.languages.forEach(function (lang){
        // if (uniqueLanguages.){
        // }
    });
    // uniqueLanguages = user.languages.reduce((uniqueLanguageFromUser, user, index) => {
    //     if (uniqueLanguages.includes(uniqueLanguageFromUser)){
    //
    //     }
    // }, [])
    return uniqueLanguages;
}, "");