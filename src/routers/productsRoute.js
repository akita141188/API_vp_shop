const express = require("express")
const router = express.Router();
const ProductController = require("../apps/controllers/apis/productsController")

router.get("/products", ProductController.index)
router.get("/products/:id", ProductController.show)
router.get("/products/:id/comments", ProductController.comments)
router.post("/products/:id/comments", ProductController.storeComments)

module.exports = router;