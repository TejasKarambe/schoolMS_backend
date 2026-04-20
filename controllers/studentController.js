const studentModel = require("../models/studentModel");

exports.addStudent = (req, res) => {
  studentModel.addStudent(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student added successfully" });
  });
};

exports.getStudents = (req, res) => {
  studentModel.getStudents((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateStudent = (req, res) => {
  studentModel.updateStudent(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student updated successfully" });
  });
};

exports.deleteStudent = (req, res) => {
  studentModel.deleteStudent(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Student deleted successfully" });
  });
};