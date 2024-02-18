const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database(':memory:');

let db = new sqlite3.Database('../db/normal.db');

export function dbConn(): any {
  let db = new sqlite3.Database('../db/normal.db');
  return db
}

let sql = `CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
  )`;

db.all(sql, [], (err: any, rows: any[]) => {
  if (err) {
    throw err;
  }
  rows.forEach((row: { name: any; }) => {
    console.log(row.name);
  });
});

db.close((err: { message: any; }) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});