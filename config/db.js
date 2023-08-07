require("dotenv").config();
const mysql = require("mysql2");

const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

conn.getConnection(function (err, connection) {
  if (err) {
  return  console.log("not connected db");
  } // not connected!

  console.log("connected db");
  
});

module.exports = conn.promise();
