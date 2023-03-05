"use strict";

function _createBook(id, title, price) {
  return {
    id: id,
    title: title,
    price: price,
  };
}

function getDefaultBooks() {
  let books = [
    {
      id: makeId(),
      title: "JavaScript: The Definitive Guide",
      image: "",
      price: 39.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores debitis eaque commodi perferendis doloribus ab fugiat, ",
    },
    {
      id: makeId(),
      title: "Eloquent JavaScript",
      image: "",
      price: 29.99,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores debitis eaque commodi perferendis doloribus ab fugiat, facilis, incidunt aspernatur nulla, laudantium nisi veniam repudiandae deserunt pariatur sunt quibusdam! Unde, animi minus odit qu",
    },
    {
      id: makeId(),
      title: "You Don't Know JS",
      image: "",
      price: 24.99,
      description: "t qu",
    },
  ];
  return books;
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

let res = makeId();
console.log("res", res);

function makeId(length) {
  var result = [];
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result;
}

function removeFromStorage(id) {
  let books = JSON.parse(localStorage.getItem("books"));
  books = books.filter((book) => book.id !== id);
  localStorage.setItem("books", JSON.stringify(books));
}
