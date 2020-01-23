const orm = require("../config/orm");

const item = {
    list: (callback) => {
        orm.selectAll("items", callback);
    },
    create: (data, callback) => {
        orm.insertOne("items", data, callback);
    },
    update: (data, id, callback) => {
        orm.updateOne("items", data, id, callback);
    },
    delete: (id, callback) => {
        orm.updateOne("items", {completed: true}, id, callback);
    }
};

module.exports = item;