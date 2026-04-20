const teacherModel = require("../models/teacherModel");

exports.createTeacher = (req, res) => {
  teacherModel.createTeacher(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Teacher added successfully" });
  });
};

exports.getTeachers = (req, res) => {
  teacherModel.getTeachers((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateTeacher = (req, res) => {
  teacherModel.updateTeacher(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Teacher updated successfully" });
  });
};

exports.deleteTeacher = (req, res) => {
  teacherModel.deleteTeacher(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Teacher deleted successfully" });
  });
};