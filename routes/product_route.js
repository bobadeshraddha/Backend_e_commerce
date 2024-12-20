const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_product");

router.post("/add",  userController.addproduct);

router.get("/getall",  userController.getAllproduct);


module.exports = router;