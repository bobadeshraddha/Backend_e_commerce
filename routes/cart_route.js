const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_cart");
const verifyToken = require("../middlewere/auth");

router.post("/create", verifyToken, userController.createCart);

router.get("/get", verifyToken, userController.getUserCart);

router.put("/update", verifyToken, userController.ManageCartProductQuantity);

module.exports = router;
