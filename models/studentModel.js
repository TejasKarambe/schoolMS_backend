const db = require("../config/db");

exports.addStudent = (data, callback) => {
  const sql = "INSERT INTO students (name, roll_number, phone, email, class_id) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [data.name, data.roll_number, data.phone, data.email, data.class_id], callback);
};

exports.getStudents = (callback) => {
  const sql = `
    SELECT students.*, classes.class_name 
    FROM students 
    LEFT JOIN classes ON students.class_id = classes.id
  `;
  db.query(sql, callback);
};

exports.updateStudent = (id, data, callback) => {
  const sql = `
    UPDATE students 
    SET name=?, roll_number=?, phone=?, email=?, class_id=?
    WHERE id=?
  `;
  db.query(sql, [
    data.name,
    data.roll_number,
    data.phone,
    data.email,
    data.class_id,
    id
  ], callback);
};

exports.deleteStudent = (id, callback) => {
  db.query("DELETE FROM students WHERE id = ?", [id], callback);
};