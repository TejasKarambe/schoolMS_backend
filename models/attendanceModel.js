const db = require("../config/db");

exports.markBulkAttendance = (records, callback) => {
  const sql = `
    INSERT INTO attendance (student_id, class_id, date, status)
    VALUES ?
    ON DUPLICATE KEY UPDATE status = VALUES(status)
  `;

  const values = records.map(r => [
    r.student_id,
    r.class_id,
    r.date,
    r.status
  ]);

  db.query(sql, [values], callback);
};

exports.getAttendanceByClassAndDate = (classId, date, callback) => {
  const sql = `
    SELECT a.*, s.name
    FROM attendance a
    JOIN students s ON a.student_id = s.id
    WHERE a.class_id = ? AND a.date = ?
  `;
  db.query(sql, [classId, date], callback);
};