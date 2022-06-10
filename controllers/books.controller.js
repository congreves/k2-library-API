const uuid = require("uuid");

const model = require("../models/books.model");

async function getBooks(req, res) {
  const result = await model.getAll();

  res.json(result);
}

async function getBook(req, res) {
  const id = req.params.id;

  try {
    const foundBook = await model.getOne(id);
    if (!foundBook) throw new Error(`No book with ID ${id} was found`);

    res.status(200).json({ status: "success", data: foundBook });
  } catch (error) {
    res.status(400).json({ status: "error", message: err.message });
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

    res.status(200).json({ status: "success", data: newBook });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
}

async function deleteBook(req, res) {
  const id = req.params.id;
  try {
    const deleted = await model.getOne(id);
    if (!deleted) throw new Error(`No book with ID ${id} was found`);

    await model.deleteOne(id);
    res.status(200).json({ status: "success", data: deleted });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
}

async function editBook(req, res) {
  const id = req.params.id;

  try {
    
    const edited = await model.getOne(id);
    if (!edited) throw new Error(`No book with ID ${id} was found`);

   await model.editOne(id, req.body);
    res.status(200).json({ status: "success", data: req.body });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
}


async function editPartOfBook(req, res) {
    const id = req.params.id;  
    try {
    
        const edited = await model.getOne(id);
        if (!edited) throw new Error(`No book with ID ${id} was found`);
    
       await model.editPart(id, req.body);
        res.status(200).json({ status: "success", data: req.body });
      } catch (err) {
        res.status(400).json({ status: "error", message: err.message });
      }
    }


module.exports = {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  editBook,
  editPartOfBook
};
