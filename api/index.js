const express = require('express');
const mysql = require('mysql');

const api = express();

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "amazon",
  password: "test123"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MYSQL connected ..");
});

api.get('/', (req, res) => {
  res.send('ok, good');
});

api.get('/articles', (req, res) => {
  connection.query('SELECT * FROM articles',(err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

api.listen(8000,(err) => {
  if(err) throw err;
  console.log('API running ..');
})