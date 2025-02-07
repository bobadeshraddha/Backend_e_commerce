const express = require("express");
const router = express.Router();
const userController = require("../controller/controller_user");

router.post("/register", userController.registeruser);

router.post("/login", userController.loginUser);

router.get("/getall", userController.getAlluser);

module.exports = router;
