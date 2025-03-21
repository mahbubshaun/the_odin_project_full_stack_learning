const myLibrary = [];

function Book(title, author, pages, read, source) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.source = source;
  this.info = function () {
    return (
      this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    );
  };
}

function addBookToArray(title, author, pages, read, source) {
  const book = new Book(title, author, pages, read, source);

  myLibrary.push(book);
  console.log("Book added successfully");
  let id = myLibrary.length -1;
  // Render only the new book
  createBookCardElements(book.title, book.author, book.pages, read, book.source, id);
}



function createBookCardElements(titleText, authorText, pagesText, readText, src, id) {
  const bookContainer = document.querySelector('.book-container');  
  const bookCard = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const details = document.createElement("div");
  const bookTitleContainer = document.createElement("div");
  const bookTitle = document.createElement("h1");
  const authorContainer = document.createElement("div");
  const author = document.createElement("h3");
  const pagesContainer = document.createElement("div");
  const pages = document.createElement("p");
  const readContainer = document.createElement("div");
  const read = document.createElement("button");
  const deleteButton = document.createElement("button");


  bookCard.classList = "book-card";
  bookCard.id = id;
  imgContainer.classList = "img-container";
  img.classList = "book-cover";
  img.src = src;
  details.classList = "details";
  bookTitleContainer.classList = "book-title-con";
  bookTitle.classList = "book-title";
  bookTitle.textContent = titleText;
  authorContainer.classList = "author";
  author.classList = "book-author";
  author.textContent = authorText;
  pagesContainer.classList = "pages-con";
  pages.classList = "pages";
  pages.textContent = pagesText
  readContainer.classList = "read";
  read.classList = "read-button";
  read.textContent = readText;
  deleteButton.textContent = 'Delete';
  deleteButton.classList = 'delete-button';

  bookCard.appendChild(imgContainer);
  imgContainer.appendChild(img);
  bookCard.appendChild(details);
  details.appendChild(bookTitleContainer);
  bookTitleContainer.appendChild(bookTitle);
  details.appendChild(authorContainer);
  authorContainer.appendChild(author);
  details.appendChild(pagesContainer);
  pagesContainer.appendChild(pages);
  details.appendChild(readContainer);
  readContainer.appendChild(read);
  readContainer.appendChild(deleteButton);
  bookContainer.appendChild(bookCard);
  read.addEventListener('click', ()=>{
     if (read.textContent === 'Read')
     {
      read.textContent = 'Unread';
      myLibrary[id].read = 'Unread';
      

     }
     else{
      read.textContent = 'Read';
      myLibrary[id].read = 'Read';
     }
     console.log(myLibrary);
  });

  deleteButton.addEventListener('click', ()=>
  {
    bookContainer.removeChild(bookCard);
    delete myLibrary[id];
    console.log(myLibrary);

  });
  
}

addBookToArray("The Hobbit", "J.R.R. Tolkien", "295 pages", "Unread", 'https://m.media-amazon.com/images/I/712cDO7d73L._SY342_.jpg');
addBookToArray("Chronicles of Narnia", "C. S. Lewis", "1776 pages", "Unread", 'https://m.media-amazon.com/images/I/81krss56fOL._SY466_.jpg');
console.log(myLibrary);

//Create book card dynamically
// function renderBooks()
// {
//     myLibrary.forEach(book => {
//         createBookCardElements(book.title, book.author, book.pages, "Read", book.source );
    
//     });

// }

// renderBooks();


const addBookButton = document.querySelector('.new-book-button');
const modal = document.querySelector('#favDialog');
const jsCloseBtn = document.querySelector('#cancel');
const jsConfirmBtn = document.querySelector('#confirmBtn');
const titleinput = document.querySelector('#btitle');
const authorinput = document.querySelector('#bauthor');
const pagesinput = document.querySelector('#bpages');
const imgurl = document.querySelector('#bimage');
const form = document.querySelector('#dialog-form');




addBookButton.addEventListener('click', () => {
        
    modal.showModal();

});

jsCloseBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    modal.close();
  });

  jsConfirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = titleinput.value;
    const author = authorinput.value;
    const pages = pagesinput.value;
    const source = imgurl.value;
    addBookToArray(title, author, pages, "not read yet", source);
    // renderBooks();
    modal.close();
    form.reset();
});