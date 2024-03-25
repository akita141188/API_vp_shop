const mongoose = require("../../common/database")();


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    full_name: {
        type: String,
        required: true,
    },

},{
        timestamps: true,
});

const userModel = mongoose.model("Users",userSchema,"users");
module.exports = userModel;