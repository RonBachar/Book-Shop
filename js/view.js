'use strict'

function onInit() {
  createBooks();
  renderBooks();
}

function renderBooks() {
  let books = getBooks();
  console.log('books',books);
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Add the header row to the table
  const headerRow = document.createElement("tr");
  const headers = ["ID", "Title", "Price", "Actions"];

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);


  const rows = books.map((book) => {
    const tr = document.createElement("tr");
    console.log(book);
    tr.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.price} $</td>
        <td>           
             <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#readModal"
              onclick="handleRead(${book.id})">Read
             </button>

             <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#updateModal"
              onclick="handleUpdate(${book.id})">Update
             </button>

             <button type="button" class="btn btn-danger"
             onclick="handleDelete(${book.id})">Delete</button>

        </td>
      `;

    return tr;
  });

  tbody.append(...rows);
  table.appendChild(tbody);

  let elContainer = document.getElementById("books-container");
  elContainer.innerHTML = "";
  elContainer.appendChild(table);
}
function handleAddBook() {
  const title = prompt("Enter the book title:");
  const price = prompt("Enter the book price:");
  const newBook = _createBook(makeId(), title, price);
  gBooks.push(newBook);
  _saveBooksToStorage();
  renderBooks();
}
function handleDelete(bookId) {
  deleteBook(bookId);
  renderBooks();
}
function handleRead(bookId) {
  const book = getBookById(bookId);
  console.log("book: ", book);
  const myModal = document.getElementById("read-modal");
  myModal.innerHTML = book.description;
}
function handleUpdate(bookId) {
  const myModalId = document.getElementById("bookId");
  myModalId.innerText = bookId;
  const book = getBookById(bookId);
}

