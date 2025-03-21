class Book {
    constructor(title, author, pages, read, source) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.source = source;
    }
  
    toggleRead() {
      this.read = this.read === "Read" ? "Unread" : "Read";
    }
  }
  
  const myLibrary = [];
  
  function addBookToArray(title, author, pages, read, source) {
    const book = new Book(title, author, pages, read, source);
    myLibrary.push(book);
    renderBooks();
  }
  
  function renderBooks() {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = ""; // Clear existing books before re-rendering
  
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.dataset.id = index;
  
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
        book.toggleRead();
        renderBooks();
      });
  
      const deleteButton = bookCard.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        renderBooks();
      });
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
  