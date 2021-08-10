
// Create a function, filterOutBobUsers, that takes in an array of user objects with firstName and lastName properties and returns an array of user objects without any Bob users. The case of the Bob names does not matter.

    var users = [
    {
        firstName: 'bob',
        lastName: 'Smith'
    },
    {
        firstName: 'BOB',
        lastName: 'Smith'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith'
    },
    {
        firstName: 'Dawn',
        lastName: 'Smith'
    }
]
var users2 = users;
var users3 = users;

// function filterOutBobUsers(users){
//     for (var i = 0; i < users.length; i++){
//         if (users[i].firstName.toLowerCase() === "bob"){
//             console.log("Deleting Bob at iteration " + i)
//             delete users[i];
//         }
//     }
//     return users;
// }
function filterOutBobUsers2(users, nameToDelete){
    return users.filter(function (userObject){ return userObject.firstName.toLowerCase() !== nameToDelete})
}
// console.log(filterOutBobUsers(users));
console.log(filterOutBobUsers2(users2, "cathy"));
    //
    // [
    // {
    //     firstName: 'Fred',
    //     lastName: 'Smith'
    // },
    //     {
    //         firstName: 'Cathy',
    //         lastName: 'Smith'
    //     },
    //     {
    //         firstName: 'Dawn',
    //         lastName: 'Smith'
    //     }
    // ]