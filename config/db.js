const sqLite = require("sqlite3").verbose();

const db = new sqLite.Database("./db.sqlite", (error) => {
    if (error) {
      console.error(error.message);
      throw error;
    }});

const booksStatement = `
CREATE TABLE IF NOT EXISTS books 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE,
    author TEXT,
    genre TEXT
)
`;

db.run(booksStatement, (error) => {
    if (error) {
        console.error(error.message);
        throw error;
    }
    const insert = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)"
    db.run(insert, ["Harry Potter", "J.K Rowling", "Fantasy"], (error) => {
        if (error && error.errno !== 19){
         console.error(error);
        }
    })
})

module.exports = db;


