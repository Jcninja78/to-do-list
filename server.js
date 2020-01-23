const express = require ("express");

const item = require("./models/todolist");

// **LINE IN CODE BELOW IS FOR TESTING**

// item.list((result) => {
//     console.log(result);
// });

// item.create({
//     name: "todolist item",
//     completed: false},
// (result) => {
//     console.log(result);
// });

// item.update({
//     name: "changed todolist item",
//     completed: false},
// 7,
// (result) => {
//     console.log(result);
// });

// item.delete(7, (result) => {
//     console.log(result);
// });

// orm.selectAll("items", (result) => {
//     console.log(result);
// });

// orm.insertOne("items", {
//     name: "Grocery Shopping",
//     completed: false
// }, (result) => {
//     console.log(result);
// });

// orm.updateOne("items", {
//     name: "New Name",
//     completed: true
// }, 
// 4, 
// (result) => {
//     console.log(result);
// });