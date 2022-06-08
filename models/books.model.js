const db = require("../config/db");

const VALID_KEYS = ["title", "author", "genre", "publishedAt", "qty"];


function getAll() {
const sql = "SELECT * FROM books"
return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
        if (error) {
            console.error(error.message);
            reject(error);
        }
        resolve(rows);
    })
})
}

function getOne(id) {
    const sql = "SELECT * FROM books WHERE id =?"
    return new Promise((resolve, reject) => {
        db.all(sql, id, (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(rows);
        })

    })
}

function addOne(data) {
    const sql = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)";

	const params = [...VALID_KEYS.map((key) => data[key])];

    return new Promise((resolve, reject) => {
        db.run(sql, params, (error) => {
            if (error) {
                console.error(error.message);
                reject(error);
                
            }
            resolve();
          
        })
    })
}


module.exports = {
  getAll,
  getOne,
  addOne
}