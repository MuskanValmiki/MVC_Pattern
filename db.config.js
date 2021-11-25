'use strict';
const express = require("express")
const app = express()
app.use(express.json())
// const port = 4000;
const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Muskan@123',
  database : 'node_mysql_crud_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports=dbConn