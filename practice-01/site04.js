// Create an array that contains book names (at least 5 book names).
// Receive a book name from the user and check if it's found, than display an appropriate massage.


const books = ["Book-A", "Book-B", "Book-C", "Book-D", "Book-E"]

function isBookExist(book, books) {
    for (let i = 0; i < books.length; i++) {
        if (books[i] === book) {
            console.log("The book " + book + " was found.");
            return;
        }
    }
    console.log("The book " + book + " wasn't found.");
}
isBookExist("Book-B", books);
isBookExist("Book-Z", books);

console.log("----------------");


// Another way to Write this method:

const books2 = ["Book-A", "Book-B", "Book-C", "Book-D", "Book-E"]

function isBookExist2(book2, book2s) {
    const res = books2.includes(book2);
    console.log((res) ? "The book " + book2 + " was found." : "The book " + book2 + " wasn't found.");
}
isBookExist2("Book-D", books2);
isBookExist2("Book-U", books2);


