const express = require ("express");

const item = require("./models/todolist");

const app = express();

const PORT = process.env.PORT || 8080;

const routes = require("./controllers/items_controller");

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

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