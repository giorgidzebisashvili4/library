const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    // this.info = function(){
    //     return (title+" "+author+", "+pages+", "+read)
    // }
}

const theHobbit = new book("The Hobbit","by J.R.R. Tolkien","295 pages","not read yet" )
myLibrary.push(theHobbit) 
console.log(myLibrary)
const theHobbit2 = new book("The Hobbit2","by J.R.R. Tolkien","300 pages","yes" )
const theHobbit3 = new book("The Hobbit3","by J.R.R. Tolkien","350 pages","no" )
myLibrary.push(theHobbit2)
myLibrary.push(theHobbit3) 
console.log(myLibrary)
function addBookToLibrary() {
    // do stuff here
  }