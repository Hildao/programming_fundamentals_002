// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}


function checkBook(bookTitle) {
  for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue[i];
    //console.log(book);
    if (book === bookTitle) {
      return true;
    }
  }
  return false;
}

function countBooksByFirstLetter(letter) {
  //variable count placed outside of the loop so that count //increases everytime the loop is run.  
  let count = 0
  // loop through catalogue to get book titles 
  for (i = 0; i < catalogue.length; i++) {
    // store book titles in variable
    let bookTitles = catalogue[i];
    //search for books begining with W
    if (bookTitles.charAt(0) === letter) {
      count++
    }
  }
  return count;

}

function countBooksByKeyword(Keyword) {
  //variable count placed outside the loop 
  let count = 0;
  // loop through each book and check the keyword 
  for (let i = 0; i < catalogue.length; i++) {
    //store keyword in a variable 
    const bookKeyWord = catalogue[i];
    if (bookKeyWord.toLowerCase().match(Keyword.toLowerCase())) {
      count++        //add one to the number of books by the given keyword
    }
  }
  return count;
}

function getBooksByAuthor(author) {
  //loop through each books in catalogue and check the author 
  for (i = 0; i < catalogue.length; i++) {
    //store books in a variable 
    const books = catalogue[i];
    if (author === books) {
      //get books by author
      getBooksByAuthor;
    }
  }
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
