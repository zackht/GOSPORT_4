const express = require('express');
const app = express();
app.listen(3001 , ()=>{
    console.log('ok, server is running on port 3001')
})
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mysql = require('mysql');
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "gosport",
    port: 3306,
  });
 

  app.get("/employee", (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.post("/create",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const userimg = req.body.userimg;
    const tel = req.body.tel;
    db.query("INSERT INTO user ( email,password,username,userimg,tel) VALUES (?,?,?,?,?)",
    [email,password,username,userimg,tel],
    (err,result)=>{
        if(err){
            console.log("錯誤");
        }else{
            res.send("成功");
        }
    }
    )
  })