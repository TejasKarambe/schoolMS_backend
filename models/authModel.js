const db = require("../config/db");

exports.login = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], callback);
};

exports.resetPassword = (id, newPassword, callback) => {
  db.query(
    "UPDATE users SET password=? WHERE id=?",
    [newPassword, id],
    callback
  );
};