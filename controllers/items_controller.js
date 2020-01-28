const express = require("express");

const toDoList = require("../models/todolist");

const router = express.Router();

// all of routes
router.get("/", (req, res) => {
    item.list((items) => {
        const viewData = {
            items: items
        };

        res.render("index", viewData);
    });
});

router.post("/item/create", (req, res) => {
    const item_name = req.body.name;
    item.create({
        name: item_name,
        completed: false
    }, (result) => {
        res.redirect("/")
    });
});
// get all of the items, and display them on the page

// create a new item

// delete an item

module.exports = router;