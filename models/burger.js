const orm = require("../config/orm");

const burger = {
    all(columns, cb){
        orm.selectAll(columns, "burgers", cb);
    },
    update(newValue, targetId, cb){
        orm.updateOne("burgers", newValue, targetId, cb);
    },
    create(data, cb){
        orm.insertOne("burgers", data, cb);
    }
};

module.exports = burger;