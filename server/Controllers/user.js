const connection = require("../DB/sql-connect.config");

const checkEmail = (req, res) => {
  const { email } = req.query;
  const query = "SELECT COUNT (*) AS count FROM users WHERE email = ?";
  connection.query(query, [email], (err, results) => {
    if (err) {
      return res.status(502).json({ message: "Server Error." });
    }
    if (results[0].count === 0) {
      return res.status(400).json({ message: "Email not exist." });
    }
    return res.status(200).json({ message: "User exist" });
  });
};

const saveDetails = (req, res) => {
  const { email, first_name, last_name, phone, birth } = req.body;

  const query = `INSERT INTO users (email, first_name, last_name, phone, birth) VALUES (?, ?, ?, ?, ?)`;

  connection.query(
    query,
    [email, first_name, last_name, phone, birth],
    (err, result) => {
      if (err) {
        return res.status(502).json({ message: "Email exist." });
      } else {
        return res.status(200).json({ message: "Email saved successfully!" });
      }
    }
  );
};

exports.checkEmail = checkEmail;
exports.saveDetails = saveDetails;
