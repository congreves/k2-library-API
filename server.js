const express = require("express");

const app = express();

app.use(express.json());

const PORT = 4003;

const booksRouter = require("./routers/books.router")

app.use(booksRouter);

app.listen(PORT, () => {
  console.log(`Servern lyssnar på port ${PORT}`);
});
