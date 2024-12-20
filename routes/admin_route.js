const express = require("express");
const router = express.Router();
const adminController = require("../controller/controller_admin");

router.post("/register", adminController.registeruser);

router.post("/login", adminController.loginUser);

module.exports = router;
