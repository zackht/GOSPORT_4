const express = require('express');
const app = express();
// 使用express
app.listen(3001 , ()=>{
    console.log('ok, server is running on port 3001')
})
// port號3001 啟動server時提式ok, server is running on port 3001


//阿柯聊天室

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server,{
  cors :{
    origin:"http://localhost:3000",
    methods:["GET,POST"],
  }
})
//建立連線
var datas = [
  {message: "Welcome!"  }
]
io.on("connection",(socket)=>{
  console.log(`User Connected:${socket.id}`);
  //socket.on(“監聽來自client 的send_mesg事件名稱”, callback)
  io.emit("receive_message",datas);

    socket.on("send_mesg",(data)=>{
      //socket.emit(“對當前連線的所有 Client 發送的事件名稱”, data)
      
      console.log(data);
      datas.push(data)
      io.emit("receive_message",[data]);
io.emit("receive_message",datas);
  })
})

server.listen(3002,()=>{
  console.log('ok, server is running on port 3002');
})
//阿柯聊天室

const cors = require('cors');
app.use(cors());
// 使用cors跨來源資源公用
const mysql = require('mysql');
const { Socket } = require('dgram');
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "gosport",
    port: 3306,
});
// 連接mysql
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// 使用json格式回傳解決431上傳檔案過長錯誤

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
    app.post("/employee", (req, res) => {
      db.query("SELECT * FROM user where userid = 1", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // user頭像更改
    app.post("/userupdate", (req, res) => {
      const img = req.body.img;
      console.log(`後端接收${img}`)
      db.query("UPDATE user SET userimg=? where userid =1",[img], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後台零打搜尋
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
    // 後台零打編輯
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
    // 後台球隊刪除
    app.post("/teamdelete", (req, res) => {
      const teameventid = req.body.teameventid;
      db.query("DELETE from teamevent where teameventid = ?"
      ,[teameventid], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後台轉租刪除
    app.post("/rentdelete", (req, res) => {
      const articleid_sublet = req.body.articleid_sublet;
      db.query("DELETE from userarticle_sublet where articleid_sublet = ?"
      ,[articleid_sublet], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後台球隊搜尋
    app.post("/team", (req, res) => {
      const teamstartday = req.body.teamstartday;
      const teamendday = req.body.teamendday;
      const teamtype = req.body.teamtype;
      const location = req.body.location;
      if(location==''){
        db.query("SELECT * FROM teamevent where startdate >= ? AND enddate <= ? AND type = ?"
      ,[teamstartday,teamendday,teamtype], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
      }else{
        db.query("SELECT * FROM teamevent where startdate >= ? AND enddate <= ? AND type = ? AND location LIKE ?"
      ,[teamstartday,teamendday,teamtype,location], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
      }
      
    });
    // 後台球隊編輯
    app.post("/teamedit", (req, res) => {
      const teameventid = req.body.teameventid;
      db.query("SELECT * FROM teamevent where teameventid = ?"
      ,[teameventid], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 後臺球隊編輯儲存
    app.post("/teamupdate", (req, res) => {
      const teamstartdate = req.body.teamstartdate;
      const teamenddate = req.body.teamenddate;
      const teamstarttime = req.body.teamstarttime;
      const teamendtime = req.body.teamendtime;
      const teamtype2 = req.body.teamtype2;
      const teamtitle = req.body.teamtitle;
      const teamlocation = req.body.teamlocation;
      const zerodalevel = req.body.zerodalevel;
      const teampay = req.body.teampay;
      const teamtext = req.body.teamtext;
      db.query("UPDATE teamevent SET startdate =?,enddate=?,starttime =?,endtime=?,type=?, title =?,location=?,text=?,pay=?  where teameventid=1"
      ,[teamstartdate,teamenddate,teamstarttime,teamendtime,teamtype2,teamtitle,teamlocation,teamtext,teampay], (err, result) => {
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
      const fieldname = req.body.fieldname;
      if(fieldname==''){
        db.query("SELECT * FROM userarticle_sublet where date BETWEEN ? AND ? AND area = ? AND county =?"
        ,[renttime,renttime1,rentselectarea,rentselectcounty], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      }else{
        db.query("SELECT * FROM userarticle_sublet where date BETWEEN ? AND ? AND area = ? AND county =? AND fieldname LIKE ?"
        ,[renttime,renttime1,rentselectarea,rentselectcounty,fieldname], (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      }
    });
    // 轉租編輯
    app.post("/rentedit", (req, res) => {
      const articleid_sublet = req.body.articleid_sublet;
      db.query("SELECT * FROM userarticle_sublet where articleid_sublet = ?"
      ,[articleid_sublet], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 轉租儲存
    app.post("/rentupdate", (req, res) => {
      const articleid_sublet =req.body.articleid_sublet;
      const rentcontent = req.body.rentcontent;
      const rentstarttime = req.body.rentstarttime;
      const rentendtime = req.body.rentendtime;
      const rentdate = req.body.rentdate;
      const rentcounty = req.body.rentcounty;
      const rentarea = req.body.rentarea;
      const rentfieldname = req.body.rentfieldname;
      const rentaddress = req.body.rentaddress;
      const rentcost = req.body.rentcost;
      const number2 = req.body.number2;
      console.log(`後端${number2}`);
      db.query("UPDATE userarticle_sublet SET content=?,starttime=?,endtime=?,date=?,county=?,area=?,fieldname=?,address=?,cost=?,amount=?  where articleid_sublet=?"
      ,[rentcontent,rentstarttime,rentendtime,rentdate,rentcounty,rentarea,rentfieldname,rentaddress,rentcost,number2,articleid_sublet], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    // 登入資料
    app.post("/userinfo", (req, res) => {
      const password = req.body.password
      const account = req.body.account;
      db.query("SELECT * FROM user WHERE email = ? AND password =?",[account,password], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          
        }
      });
    });
    //觀看個人資料
    app.post("/selfinfo", (req, res) => {
      const account = req.body.account;
      db.query(" SELECT * FROM user,userteam,userbadgeimg,userbadge  WHERE email = ? AND user.userid = userteam.userid = userbadge.userid AND userbadge.badgeid = userbadgeimg.badgeid",[account], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        
      });
    });

    //更新個人資料
    app.post("/selfalter", (req, res) => {
      const email = req.body.email;
      const password = req.body.password;
      const username = req.body.username;
      const userimg = req.body.userimg;
      const tel = req.body.tel;
      const userdescribe = req.body.userdescribe;
      const account = req.body.account;
      db.query(" UPDATE `user` SET `email`= ? ,`password`= ? ,`username`= ? ,`userimg`= ? ,`tel`= ? ,`userdescribe`= ? WHERE `email`= ?",
      [email,password,username,userimg,tel,userdescribe,account], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
        
      });
    });

  //會員零打文章搜尋
  app.post("/findzoro", (req, res) => {
    const userid = req.body.userid;
    const starttime = req.body.stratDate;
    const endtime = req.body.endDate;
    db.query("SELECT * FROM `userarticle_zeroda` WHERE userid = ? AND date BETWEEN ? AND ?",[userid,starttime,endtime], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
      
    });
  });
  //會員轉租文章搜尋
  app.post("/findsub", (req, res) => {
    const userid = req.body.userid;
    const starttime = req.body.stratDate;
    const endtime = req.body.endDate;
    db.query("SELECT * FROM `userarticle_sublet` WHERE userid = ? AND date BETWEEN ? AND ?",[userid,starttime,endtime], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
      
    });
  });
  // 取得留言數
  app.post("/countsub", (req, res) => {
    const articleid = req.body.articleid;
    db.query("SELECT count(*)as a FROM articlemessage_sublet WHERE `articleid_sublet`= ?",[articleid], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
      
    });
  });
  app.post("/countzero", (req, res) => {
    const articleid = req.body.articleid;
    db.query("SELECT count(*)as a FROM articlemessage_zeroda WHERE `articleid_zeroda`= ?",[articleid], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
      
    });
  });

    // 查詢會員、球場id
    app.post('/teambasic', (req,res)=>{
      const userid = req.body.userid;
      const teamid = req.body.teamid;
      db.query(
          `SELECT tname,sidename, week,type,level,teamimg,fee,text,starttime,endtime,county,area,teamimgpath 
          FROM userteam, team 
          where userteam.teamid=team.teamid and userteam.userid=? and userteam.teamid=?`,
          
          [userid,teamid],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      });
   