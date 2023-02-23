const express = require('express');
const app = express();
const users = require('./data/users.js')
const PORT=3000;
const PAGE_SIZE = 3;

//TO GET ALL USERS
app.get('/users', (req, res) => {
  res.json(users);
});


// TO GET USERS IN PAGINATED FORMAT
app.get('/user', (req, res) => {
  const currentPage = req.query.page || 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedUsers = users.slice(startIndex, endIndex);
  res.json(
    paginatedUsers
  );
});


//SEARCH API TO GET USER BY MATCHING LETTER / NAME
app.get('/search/user', (req, res) => {
  const filteredUsers = filterUsersByName(req.query.name, users);
  res.json(
    filteredUsers
  );
});


//FILTER USER BY MATCHING LETTER / NAME
function filterUsersByName(name, users) {
  if (!name) {
    return users;
  }
  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
}


app.listen(PORT, () => {
  console.log('Server listening on port 3000');
});


// //APIS
// 1. To GET ALL USERS
// http://localhost:3000/users

// 2. To GET USERS WITH PAGENATION BY GIVING PAGE NUMBER
// http://localhost:3000/user?page=5

// 3. TO SERACH USER WITH MATCHING LETTER
// http://localhost:3000/user?name=i