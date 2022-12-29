const express = require('express');
const db = require('./config/db');
// 引入db.js
const app = express();
const port = 7000; // your server port


app.use(express.json());
app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});

db.query('select * from user', function(err, rows) {
  if (err) throw err;
  console.log('Response: ', rows);
});

app.post("/signin", function(req, res) {
  const { email, password } = req.body;
  db.query(
    `SELECT * FROM user WHERE email='${email}' AND password='${password}'`,
    function(err, rows, fields) {
      if (rows.length === 0) {
        return res.send({ error: 'ACCOUNT_NOT_EXIST' });
      };
      return res.send({ message: 'LOGIN_SUCCESSFULLY' });
    }
  );
});