const mysql = require('mysql');
const db = require('./db.config');

const mysqlConnection = mysql.createConnection({

    host: db.HOST,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DATABASE

});

mysqlConnection.connect( (err) =>{
    if(err) throw err;
    console.log('Successfully Connected to the database...')
})

module.exports = mysqlConnection;