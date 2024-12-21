const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_cart");
const verifyToken = require("../middlewere/auth");

router.post("/create",verifyToken, userController.createCart);

module.exports = router;