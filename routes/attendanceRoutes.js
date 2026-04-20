const express = require("express");
const router = express.Router();
const controller = require("../controllers/attendanceController");

router.post("/bulk", controller.markBulkAttendance);
router.get("/", controller.getAttendanceByClassAndDate);

module.exports = router;