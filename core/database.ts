const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db/normal.db');

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

export function dbConn(): any {
  let db = new sqlite3.Database('../db/normal.db');
  return db
}

// function createTable creates a table in the database as named in the argument and the provided map of columns
export function createTable(db: any, tableName: string, columns: { [x: string]: string; }): void {
  let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
  for (const [key, value] of Object.entries(columns)) {
    sql += `${key} ${value}, `;
  }
  sql = sql.slice(0, -2);
  sql += ')';
  db.run(sql, (err: any) => {
    if (err) {
      throw err;
    }
  });
}

export function dbClose(db: any): void {
  db.close((err: { message: any; }) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}