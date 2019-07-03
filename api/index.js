const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const sha256 = require('sha256');

const api = express();

// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
api.use(bodyParser.json())

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
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

api.post('/users', (req, res) => {
  connection.query(`SELECT email FROM users WHERE email = "${req.body.email}"`,(err, result) => {
    if (err) throw err;
    if(result.length === 0) {
      connection.query(`INSERT INTO users (firstname, lastname, address, password, email)
        VALUES ("${req.body.firstName}","${req.body.lastName}","${req.body.address}","${sha256(req.body.password)}","${req.body.email}")`,(err, result) => {
        if (err) throw err;
        console.log(sha256('test'))
        res.sendStatus(200);
        console.log(result);
      })
    } else {
      res.sendStatus(403);
    }
  })
});

api.post('/login', (req, res) => {
  console.log(req.body)
  connection.query(`SELECT * FROM users WHERE email = "${req.body.email}" AND password = "${sha256(req.body.password)}"`,(err, result) => {
    if (err) throw err;
    if(result.length <= 0) {
      res.send({"code":401});
    } else {
      res.send(jwt.sign({
        userId: result.email
      }, pKey, {
        expiresIn: '1h'
      }));
    }
  })
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

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    console.log("ERROR VERIFY TOKEN")
    res.sendStatus(403);
  }
}

let pKey= "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";