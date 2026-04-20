const db = require("../config/db");

exports.createClass = (data, callback) => {
  const sql = `
    INSERT INTO classes (class_name, section, teacher_id) VALUES (?, ?, ?)
  `;
  db.query(sql, [data.class_name, data.section, data.teacher_id], callback);
};

exports.getClasses = (callback) => {
  const sql = `
    SELECT c.*, t.name as teacher_name 
    FROM classes c
    JOIN teachers t ON c.teacher_id = t.id
  `;
  db.query(sql, callback);
};

exports.updateClass = (id, data, callback) => {
  const sql = `
    UPDATE classes 
    SET class_name=?, section=?, teacher_id=? 
    WHERE id=?
  `;
  db.query(sql, [data.class_name, data.section, data.teacher_id, id], callback);
};

exports.deleteClass = (id, callback) => {
  db.query("DELETE FROM classes WHERE id = ?", [id], callback);
};