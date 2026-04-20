const subjectsModel = require("../models/subjectModel");

exports.createSubject = (req, res) => {
  subjectsModel.createSubject(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Subject created successfully" });
  });
};

exports.getSubjects = (req, res) => {
  subjectsModel.getSubjects((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.updateSubject = (req, res) => {
  subjectsModel.updateSubject(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Subject updated successfully" });
  });
};

exports.deleteSubject = (req, res) => {
  subjectsModel.deleteSubject(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Subject deleted successfully" });
  });
};