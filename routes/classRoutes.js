const express = require("express");
const router = express.Router();
const controller = require("../controllers/classController");

router.post("/", controller.createClass);
router.get("/", controller.getClasses);
router.put("/:id", controller.updateClass);
router.delete("/:id", controller.deleteClass);

module.exports = router;