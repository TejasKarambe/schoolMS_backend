const authModel = require("../models/authModel");

exports.login = (req, res) => {
  const { email, password } = req.body;

  authModel.login(email, (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = results[0];

    if (user.password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  });
};

exports.resetPassword = (req, res) => {
  const { id, newPassword } = req.body;

  authModel.resetPassword(id, newPassword, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Password updated" });
  });
};

exports.changeOwnPassword = (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  authModel.login(email, (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];

    if (user.password !== oldPassword) {
      return res.status(401).json({ message: "Old password incorrect" });
    }

    authModel.resetPassword(user.id, newPassword, (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Password updated successfully" });
    });
  });
};