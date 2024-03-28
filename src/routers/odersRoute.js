const express = require("express")
const router = express.Router();
const OderController = require("../apps/controllers/apis/odersController")

router.post("/oders", OderController.oder)


module.exports = router;