const express = require("express")
const router = express.Router();
const fs = require("fs")
const path = require("path")
const CategoriesController = require("../apps/controllers/apis/categoriesController")


router.get("/categories", CategoriesController.index)
router.get("/categories/:id", CategoriesController.show)
router.post("/categories/create", CategoriesController.createCategory)
router.get("/categories/:id/products", CategoriesController.products)


module.exports = router;