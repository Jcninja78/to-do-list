const express = require ("express");

const orm = require("./config/orm");

// orm.selectAll("items", (result) => {
//     console.log(result);
// });

// orm.insertOne("items", {
//     name: "Grocery Shopping",
//     completed: false
// }, (result) => {
//     console.log(result);
// });

orm.updateOne("items", {
    name: "New Name",
    completed: true
}, (result) => {
    console.log(result);
});