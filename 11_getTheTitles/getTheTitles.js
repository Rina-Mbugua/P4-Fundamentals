const getTheTitles = function(books) {
    // Create a new array using the map function to extract book titles
    const bookTitles = books.map(book => book.title);

    // Return the array of book titles
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
