const db = require("../config/db");

// Create a subject
exports.createSubject = (data, callback) => {
  const sql = `
    INSERT INTO subjects (subject_name, class_id, teacher_id)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.subject_name, data.class_id, data.teacher_id], callback);
};

// Get all subjects with class_name, section, teacher_name
exports.getSubjects = (callback) => {
  const sql = `
    SELECT 
      subjects.*,
      classes.class_name,
      classes.section,
      teachers.name AS teacher_name
    FROM subjects
    LEFT JOIN classes ON subjects.class_id = classes.id
    LEFT JOIN teachers ON subjects.teacher_id = teachers.id
  `;
  db.query(sql, callback);
};

// Update subject
exports.updateSubject = (id, data, callback) => {
  const sql = `
    UPDATE subjects
    SET subject_name = ?, class_id = ?, teacher_id = ?
    WHERE id = ?
  `;
  db.query(sql, [data.subject_name, data.class_id, data.teacher_id, id], callback);
};

// Delete subject
exports.deleteSubject = (id, callback) => {
  const sql = "DELETE FROM subjects WHERE id = ?";
  db.query(sql, [id], callback);
};