DROP DATABASE toDoList_db;
CREATE DATABASE toDoList_db;
USE toDoList_db;
CREATE TABLE items (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(255),
    completed BOOLEAN,
    PRIMARY KEY (id)
);