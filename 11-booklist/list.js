function Book (title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

function UI() { }

UI.prototype.addBookList = function (book) {
const table = document.getElementById("list");
const tr = document.createElement("tr");

};


UI.prototype.clearFields = function () {};


document.getElementById("book-form").addEventListener("submit", (e) => {
   e.preventDefault();
   const title = document.getElementById("book-title").value;
   const author = document.getElementById("author").value;
   const isbn = document.getElementById("isbn").value;
    
   console.log(title);
   
   const book = new Book (title, author, isbn);
   const ui = new UI ();

   console.log(book);


});