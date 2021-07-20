(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    person.firstName = "Albert";
    person.lastName = "Dominguez"
    person.sayHello = function (){
        console.log("Hello from " + this.firstName + " " + this.lastName);
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    function calculateTotals(shoppers){
        var newPrice;
        var totalPrice;
        shoppers.forEach(function (shopper){
            //newPrice = shopper.amount - (shopper.amount * .12); //12% discount
            console.log("Name: " + shopper.name);
            if (shopper.amount > 200) {
                console.log("Price before discount: $" + shopper.amount);
                console.log("Discount amount: 12%");
                console.log("Amount after the discount: $" + (shopper.amount - (shopper.amount * .12)));
                console.log("----------------")
            } else {
                console.log("Price: $" + shopper.amount);
                console.log("----------------")
            }
        })
    }
    calculateTotals(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var newBookList = [];
    //var book = {};
    var books = [
        {
            title: "To Kill A Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "The Catcher in the Rye",
            author: {
                firstName: "J.D.",
                lastName: "Salinger"
            }
        },
        {
            title: "Pride and Prejudice",
            author: {
                firstName: "Jane",
                lastName: "Austen"
            }
        },
        {
            title: "A Clockwork Orange",
            author: {
                firstName: "Anthony",
                lastName: "Burgess"
            }
        },
        {
            title: "Nineteen Eighty-Four",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
    ];
    console.log(books[0].title) // "The Salmon of Doub
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"
    console.log(books[1].title) // "The Salmon of Doub
    console.log(books[1].author.firstName) // "Douglas"
    console.log(books[1].author.lastName) // "Adams"
    /**
     * TODO:
     * Loop through the books array anthor.lasd output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book, index){

        showBookInfo(book, index);
        newBookList.push(createBook(book.title, book.author));
        // console.log("Book # " + (index + 1));
        // console.log("Title: " + book.title);
        // console.log("Author: " + book.author.firstName + " " + book.autName);
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(bookTitle, bookAuthor){
        return {
            title: bookTitle,
            author: {firstName: bookAuthor.firstName, lastName: bookAuthor.lastName}}
    }
    function showBookInfo(book, index){
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.lastName);
    }
})();