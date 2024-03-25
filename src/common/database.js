const config = require("config")
const mongoose = require("mongoose");
module.exports = () => {
    mongoose.connect(config.get("db.mongoDB.uri")).then(() => console.log("Connecting to DB!"));
    return mongoose
}