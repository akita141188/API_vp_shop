const express = require("express")
const app = express();
const config = require("config")

app.use(express.urlencoded({extended:true})) //config truyen tu form
app.use(express.json()) // config truyen vao tu json

app.use(config.get("app.prefixApiVersion"), require(`${__dirname}/../routers/web.js`));
module.exports = app;