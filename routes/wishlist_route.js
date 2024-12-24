const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_wishlist");
const verifyToken = require("../middlewere/auth");


router.post("/addwishlist",verifyToken, userController.addToWishlist);

router.get("/getwishlist",verifyToken, userController.getWishlist);

router.delete("/removewishlist",verifyToken, userController.removeFromWishlist);

module.exports = router;
