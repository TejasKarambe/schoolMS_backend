const classModel = require("../models/classModel");

exports.createClass = (req, res) => {
  classModel.createClass(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Class created successfully" });
  });
};

exports.getClasses = (req, res) => {
  classModel.getClasses((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateClass = (req, res) => {
  classModel.updateClass(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Class updated successfully" });
  });
};

exports.deleteClass = (req, res) => {
  classModel.deleteClass(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Class deleted successfully" });
  });
};