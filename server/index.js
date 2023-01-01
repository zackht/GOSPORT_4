const express = require('express');
const app = express();
// 使用express
app.listen(3001 , ()=>{
    console.log('ok, server is running on port 3001')
})
// port號3001 啟動server時提式ok, server is running on port 3001
const cors = require('cors');
app.use(cors());
// 使用cors
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "gosport",
    port: 3306,
});
// 連接mysql
app.use(express.json());
// 使用json格式回傳

  app.post('/create', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const userimg = req.body.userimg;
    const tel = req.body.tel;
    db.query(
        "INSERT INTO user (email,password,username,userimg,tel) VALUES (?,?,?,?,?)",
        [email,password,username,userimg,tel],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("value Inserted");
          }
        }
      );
    })