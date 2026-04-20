const express = require("express");
const router = express.Router();
const controller = require("../controllers/subjectController");

router.post("/", controller.createSubject);
router.get("/", controller.getSubjects);
router.put("/:id", controller.updateSubject);
router.delete("/:id", controller.deleteSubject);

module.exports = router;