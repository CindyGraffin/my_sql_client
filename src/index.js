// import mysql from 'mysql';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL');
    }
});

connection.query('SELECT COUNT(*) FROM beer.article', (err, result) => {
    console.log(result);
})
connection.end();