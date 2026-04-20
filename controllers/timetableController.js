const timetableModel = require("../models/timetableModel");

exports.createEntry = (req, res) => {
  timetableModel.createEntry(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Timetable entry created successfully" });
  });
};

exports.getEntriesByClass = (req, res) => {
  timetableModel.getEntriesByClass(req.params.classId, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateEntry = (req, res) => {
  timetableModel.updateEntry(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Timetable entry updated successfully" });
  });
};

exports.deleteEntry = (req, res) => {
  timetableModel.deleteEntry(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Timetable entry deleted successfully" });
  });
};