const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DS45irL6l7",
    database: "todolist_db"
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("toDoList Database connected");
});

module.exports = connection;