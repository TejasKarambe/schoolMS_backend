const db = require("../config/db");

exports.createTeacher = (data, callback) => {
  const sql = `INSERT INTO teachers (name, phone, email) VALUES (?, ?, ?)`;
  db.query(sql, [data.name, data.phone, data.email], callback);
};

exports.getTeachers = (callback) => {
  db.query("SELECT * FROM teachers", callback);
};

exports.updateTeacher = (id, data, callback) => {
  const sql = `UPDATE teachers SET name=?, phone=?, email=? WHERE id=?`;
  db.query(sql, [data.name, data.phone, data.email, id], callback);
};

exports.deleteTeacher = (id, callback) => {
  db.query("DELETE FROM teachers WHERE id=?", [id], callback);
};