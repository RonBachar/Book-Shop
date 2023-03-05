"use strict";

const KEY = "books";
let gBooks = [];
let gId = 0;

function createBooks() {
  gBooks = getDefaultBooks();
  _saveBooksToStorage();
}

function _saveBooksToStorage() {
  saveToStorage(KEY, gBooks);
}

function getBooks() {
  return gBooks;
}

function getBookById(id) {
  const book = gBooks.find((book) => book.id == id);
  return book;
}

function deleteBook(id) {
  gBooks = gBooks.filter((book) => book.id !== id); // remove book from gBooks array
  removeFromStorage(id); // remove book from local storage
}

function makeId(length = 5) {
  var id = "";
  var possible = "0123456789";

  for (var i = 0; i < length; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

function loadFromStorage() {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}

function onUpdateSubmit() {}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
