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
//  client測試
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
    //  client測試
    app.get("/employee", (req, res) => {
      db.query("SELECT * FROM user", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // backarticle搜尋零打
    app.post("/zeroda", (req, res) => {
      const starttime1 = req.body.starttime1;
      const endtime1 = req.body.endtime1;
      const ball1 = req.body.ball1;
      const zerodainput =req.body.zerodainput;
      if(zerodainput===''){
        db.query("SELECT * FROM userarticle_zeroda where date BETWEEN ? AND ? AND ballgames = ?"
        ,[starttime1,endtime1,ball1], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      }else{
        db.query("SELECT * FROM userarticle_zeroda where date BETWEEN ? AND ? AND ballgames = ? AND content LIKE ?"
        ,[starttime1,endtime1,ball1,zerodainput], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      }
    });
    // 搜尋零打文章編輯畫面
    app.post("/zerodada", (req, res) => {
      const articleid_zeroda = req.body.articleid_zeroda;
      db.query("SELECT * FROM userarticle_zeroda where articleid_zeroda = ?"
      ,[articleid_zeroda], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後台零打編輯儲存
    app.post("/zerodaupdate", (req, res) => {
      const zerodafieldname = req.body.zerodafieldname;
      const zerodacounty = req.body.zerodacounty;
      const zerodaarea = req.body.zerodaarea;
      const zerodaaddress = req.body.zerodaaddress;
      const zerodadate = req.body.zerodadate;
      const zerodastarttime = req.body.zerodastarttime;
      const zerodaendtime = req.body.zerodaendtime;
      const zerodalevel = req.body.zerodalevel;
      const zerodacost = req.body.zerodacost;
      const zerodacontent = req.body.zerodacontent;
      const articleid_zeroda =req.body.articleid_zeroda;
      const number1 =req.body.number1;
      db.query("UPDATE userarticle_zeroda SET content=?,starttime=?,endtime=?,date=?,county=?,area=?,fieldname=?,address=?,cost=?,level=?,number = ? where articleid_zeroda = ?"
      ,[zerodacontent,zerodastarttime,zerodaendtime,zerodadate,zerodacounty,zerodaarea,zerodafieldname,zerodaaddress,zerodacost,zerodalevel,number1,articleid_zeroda], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後台零打刪除
    app.post("/zerodadelete", (req, res) => {
      const articleid_zeroda = req.body.articleid_zeroda;
      db.query("DELETE from userarticle_zeroda where articleid_zeroda = ?"
      ,[articleid_zeroda], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後台零打關鍵字搜尋
    app.post("/zerodasearch", (req, res) => {
      const zerodasearchvalue = req.body.zerodasearchvalue;
      db.query("SELECT * FROM `userarticle_zeroda` WHERE content LIKE '%?%'"
      ,[zerodasearchvalue], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // backarticle搜尋球隊
    app.post("/team", (req, res) => {
      const teamselect = req.body.teamselect;
      const teamselect2 = req.body.teamselect2;
      db.query("SELECT * FROM team where county= ? AND area = ?"
      ,[teamselect,teamselect2], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    //搜尋轉租 
    app.post("/rent", (req, res) => {
      const renttime = req.body.renttime;
      const renttime1 = req.body.renttime1;
      const rentselectcounty = req.body.rentselectcounty;
      const rentselectarea = req.body.rentselectarea;

      db.query("SELECT * FROM userarticle_sublet where date BETWEEN ? AND ? AND area = ? AND county =?"
      ,[renttime,renttime1,rentselectarea,rentselectcounty], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 個人頁面
    app.get("/userinfo", (req, res) => {
      db.query("SELECT * FROM `user` WHERE userid = 1;", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });