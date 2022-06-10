const db = require("../config/db");

const VALID_KEYS = ["title", "author", "genre"];


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

function deleteOne(id) {
    const sql = "DELETE FROM books WHERE id = ?"
    return new Promise((resolve, reject) => {
        db.run(sql, id, (error) => {
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve();
        })

    })
}

function editOne(id, data) {

    const sql = `UPDATE books SET title = ?, author = ?, genre = ? `;

    const params = [...VALID_KEYS.map((key) => data[key]), id];

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
  addOne,
  deleteOne,
  editOne
}