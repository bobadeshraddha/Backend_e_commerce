const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_categary");
const verifyToken = require("../middlewere/auth");

router.post("/create", userController.createcategary);

router.delete("/delete", userController.deletecategary);

router.put("/update", userController.updatecategary);

router.get("/get", userController.getcategary);

module.exports = router;
