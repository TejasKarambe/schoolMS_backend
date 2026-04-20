const db = require("../config/db");

exports.createEntry = (data, callback) => {
  const sql = `
    INSERT INTO timetables (class_id, subject_id, teacher_id, day, start_time, end_time)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [data.class_id, data.subject_id, data.teacher_id, data.day, data.start_time, data.end_time], callback);
};

exports.getEntriesByClass = (classId, callback) => {
  const sql = `
    SELECT t.*, c.class_name, s.subject_name, te.name AS teacher_name
    FROM timetables t
    JOIN classes c ON t.class_id = c.id
    JOIN subjects s ON t.subject_id = s.id
    JOIN teachers te ON t.teacher_id = te.id
    WHERE t.class_id = ?
    ORDER BY FIELD(day,'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'), start_time
  `;
  db.query(sql, [classId], callback);
};

exports.updateEntry = (id, data, callback) => {
  const sql = `
    UPDATE timetables
    SET class_id=?, subject_id=?, teacher_id=?, day=?, start_time=?, end_time=?
    WHERE id=?
  `;
  db.query(sql, [data.class_id, data.subject_id, data.teacher_id, data.day, data.start_time, data.end_time, id], callback);
};

exports.deleteEntry = (id, callback) => {
  const sql = `DELETE FROM timetables WHERE id=?`;
  db.query(sql, [id], callback);
};