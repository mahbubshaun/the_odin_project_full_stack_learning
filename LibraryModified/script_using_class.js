class Book {
    constructor(title, author, pages, read, source) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.source = source;
    }
  
    info() {
      return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
  }
  
  const myLibrary = [];
  
  function addBookToArray(title, author, pages, read, source) {
    const book = new Book(title, author, pages, read, source);
    myLibrary.push(book);
    console.log("Book added successfully");
    let id = myLibrary.length - 1;
    createBookCardElements(book, id);
  }
  
  function createBookCardElements(book, id) {
    const bookContainer = document.querySelector(".book-container");
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.id = id;
  
    bookCard.innerHTML = `
      <div class="img-container">
        <img class="book-cover" src="${book.source}" alt="Book Cover">
      </div>
      <div class="details">
        <div class="book-title-con">
          <h1 class="book-title">${book.title}</h1>
        </div>
        <div class="author">
          <h3 class="book-author">${book.author}</h3>
        </div>
        <div class="pages-con">
          <p class="pages">${book.pages}</p>
        </div>
        <div class="read">
          <button class="read-button">${book.read}</button>
          <button class="delete-button">Delete</button>
        </div>
      </div>
    `;
  
    bookContainer.appendChild(bookCard);
  
    const readButton = bookCard.querySelector(".read-button");
    readButton.addEventListener("click", () => {
      book.read = book.read === "Read" ? "Unread" : "Read";
      readButton.textContent = book.read;
      console.log(myLibrary);
    });
  
    const deleteButton = bookCard.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      bookContainer.removeChild(bookCard);
      myLibrary.splice(id, 1);
      console.log(myLibrary);
    });
  }
  
  addBookToArray("The Hobbit", "J.R.R. Tolkien", "295 pages", "Unread", "https://m.media-amazon.com/images/I/712cDO7d73L._SY342_.jpg");
  addBookToArray("Chronicles of Narnia", "C. S. Lewis", "1776 pages", "Unread", "https://m.media-amazon.com/images/I/81krss56fOL._SY466_.jpg");
  
  const addBookButton = document.querySelector(".new-book-button");
  const modal = document.querySelector("#favDialog");
  const jsCloseBtn = document.querySelector("#cancel");
  const jsConfirmBtn = document.querySelector("#confirmBtn");
  const titleInput = document.querySelector("#btitle");
  const authorInput = document.querySelector("#bauthor");
  const pagesInput = document.querySelector("#bpages");
  const imgUrl = document.querySelector("#bimage");
  const form = document.querySelector("#dialog-form");
  
  addBookButton.addEventListener("click", () => modal.showModal());
  jsCloseBtn.addEventListener("click", () => modal.close());
  
  jsConfirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToArray(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      "Unread",
      imgUrl.value
    );
    modal.close();
    form.reset();
  });
  