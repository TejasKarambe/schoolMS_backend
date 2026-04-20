const attendanceModel = require("../models/attendanceModel");

exports.markBulkAttendance = (req, res) => {
  attendanceModel.markBulkAttendance(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Attendance saved successfully" });
  });
};

exports.getAttendanceByClassAndDate = (req, res) => {
  const { classId, date } = req.query;
  attendanceModel.getAttendanceByClassAndDate(classId, date, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};