const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_categary");
const verifyToken = require("../middlewere/auth");

router.post("/create",  userController.createcategary);

router.delete("/delete",verifyToken, userController.deletecategary);

router.put("/update",verifyToken, userController.updatecategary);

router.get("/get",verifyToken, userController.getcategary);

module.exports = router;
