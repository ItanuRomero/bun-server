import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync("Bun!");
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);

import text from './text.txt'
console.log(text)


import { Database } from "bun:sqlite";
const db = new Database("db.db");

// Create a table (if it doesn't exist)
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`);

db.run("DELETE FROM users");

const insert = db.query("INSERT INTO users (name) VALUES (?);");
insert.run("Alice");

console.log("✅ SQLite db.db created with sample user.");

const users = db.query("select * from users")
console.log(users.all())

console.log(Bun.env.FOO)


