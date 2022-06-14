
const model = require("../models/books.model");

async function getBooks(req, res) {
  try {
    const result = await model.getAll();

    res
      .status(200)
      .json({
        status: "SUCCESS",
        data: result,
        message:
          "One can not simply ask for books and NOT GET THEM, here you go!!",
      });
  } catch (error) {
    res
      .status(400)
      .json({
        status: "ERROR",
        message:
          "Ops something went wrong! We did unfortunatley not get any books!",
      });
  }
}

async function getBook(req, res) {
  const id = req.params.id;

  try {
    const foundBook = await model.getOne(id);
    if (!foundBook) throw new Error(`No book with ID ${id} was found`);

    res
      .status(200)
      .json({
        status: "SUCCESS",
        message:
          "One can not simply ask for books and NOT GET THEM, here you go!!",
        data: foundBook,
      });
  } catch (error) {
    res
      .status(400)
      .json({
        status: "ERROR",
        message:
          "Ops something went wrong! We did unfortunatley not get any books!",
      });
  }
}

async function addBook(req, res) {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    };

    await model.addOne(newBook);

    res
      .status(200)
      .json({
        status: "SUCCESS",
        message: "Wow! Successfully added, more books to the people!!",
        data: newBook,
      });
  } catch (err) {
    res
      .status(400)
      .json({
        status: "ERROR",
        message: "Ops something went wrong! Were not able to add book",
      });
  }
}

async function deleteBook(req, res) {
  const id = req.params.id;
  try {
    const deleted = await model.getOne(id);
    if (!id === !deleted) throw new Error(`No book with ID ${id} was found`);

    await model.deleteOne(id);
    res
      .status(200)
      .json({
        status: "SUCCESS",
        data: deleted,
        message: "Awwww! Now it's deleted, less books to the people..",
      });
  } catch (err) {
    res
      .status(404)
      .json({
        status: "ERROR",
        message: "Ops something went wrong! Were not able to delete book ",
      });
  }
}

async function editBook(req, res) {
  const id = req.params.id;

  try {
    const edited = await model.getOne(id);
    if (!edited) throw new Error(`No book with ID ${id} was found`);

    await model.editOne(id, req.body);
    res
      .status(200)
      .json({
        status: "SUCCESS",
        data: req.body,
        message: "Well! Now it's edited , important with correct information!",
      });
  } catch (err) {
    res
      .status(400)
      .json({
        status: "ERROR",
        message: "Ops something went wrong! Were not able to change book ",
      });
  }
}

async function editPartOfBook(req, res) {
  const id = req.params.id;
  try {
    const edited = await model.getOne(id);
    if (!edited) throw new Error(`No book with ID ${id} was found`);

    await model.editPart(id, req.body);
    res
      .status(200)
      .json({
        status: "SUCCESS",
        data: req.body,
        message: "Well! Now it's edited , important with correct information!",
      });
  } catch (err) {
    res
      .status(400)
      .json({
        status: "ERROR",
        message: "Ops something went wrong! Were not able to modify data",
      });
  }
}

module.exports = {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  editBook,
  editPartOfBook,
};
