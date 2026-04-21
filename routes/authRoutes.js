const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");

router.post("/login", controller.login);
router.post("/reset-password", controller.resetPassword);
router.post("/change-password", controller.changeOwnPassword);

module.exports = router;