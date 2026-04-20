const express = require("express");
const router = express.Router();
const controller = require("../controllers/timetableController");

router.post("/", controller.createEntry);
router.get("/:classId", controller.getEntriesByClass);
router.put("/:id", controller.updateEntry);
router.delete("/:id", controller.deleteEntry);

module.exports = router;