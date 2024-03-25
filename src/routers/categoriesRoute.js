const express = require("express")
const router = express.Router();
const CategoryController = require("../apps/controllers/apis/categoriesController")



router.get("/categories", CategoryController.index)

module.exports = router;