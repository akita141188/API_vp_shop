const express = require("express");
const router = express.Router();


router.use("", require(`${__dirname}/productsRoute.js`));
router.use("", require(`${__dirname}/odersRoute.js`));
router.use("", require(`${__dirname}/categoriesRoute.js`));


module.exports = router;