const express =  require('express');
var app = express();
const body_parser = require('body-parser');
const mysql = require('mysql');
const http = require('http');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'sasa',
    database: 'pointoffsy'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('error connecting to mysql: ' + err.stack);
    } else {
        console.log('success connection to mysql');
    }
});


// my routes
app.get('/home', (req,res) => {
    res.send('tesing');
})


http.createServer(app).listen(80)

