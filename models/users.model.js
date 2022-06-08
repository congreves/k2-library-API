let users = [];

function findAll() {  
  return users;
}

function deleteOne(id) {
  users = users.filter((user) => user.id !== id);
}

module.exports = {
  users,
  findAll,
  deleteOne
}