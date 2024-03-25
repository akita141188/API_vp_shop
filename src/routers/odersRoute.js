const express = require("express")
const router = express.Router();
const OderController = require("../apps/controllers/apis/odersController")

router.get("/oders", OderController.oder)


module.exports = router;