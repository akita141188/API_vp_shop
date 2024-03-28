const express = require("express")
const app = express();
const config = require("config")
const cors = require("cors")

app.set("views",config.get("app.viewsFolder"))
app.set("view engine", config.get("app.viewEngine"))
app.use(express.urlencoded({extended:true})) //config truyen tu form
app.use(express.json()) // config truyen vao tu json

app.use(cors())


app.use(config.get("app.prefixApiVersion"), require(`${__dirname}/../routers/web.js`));
app.use(require(`${__dirname}/../routers/getImages.js`));
module.exports = app;