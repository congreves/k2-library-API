const express = require('express');


const booksController = require("../controllers/books.controller");
const booksRouter = express.Router();

booksRouter.get("/books", booksController.getBooks);
booksRouter.get("/books/:id", booksController.getBook);
booksRouter.post("/books", booksController.addBook);
booksRouter.put("/books/:id", booksController.editBook);
booksRouter.delete("/books/:id", booksController.deleteBook);

module.exports = booksRouter;