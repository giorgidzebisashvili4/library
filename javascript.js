const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return (title+" "+author+", "+pages+", "+read)
    }
}

const theHobbit = new book("The Hobbit","by J.R.R. Tolkien","295 pages","not read yet" )
console.log( theHobbit.info())

function addBookToLibrary() {
    // do stuff here
  }