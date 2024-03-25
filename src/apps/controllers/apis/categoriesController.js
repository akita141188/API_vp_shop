const mongoose = require("../../../common/database")();

module.exports = {
    index : (req,res)=>{
        res.send("category")

    }
}