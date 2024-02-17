const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database(':memory:');

let db = new sqlite3.Database(':memory:', (err: { message: any; }) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.close((err: { message: any; }) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});