const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '13124',
  database: 'mydb',
});

module.exports = connection;