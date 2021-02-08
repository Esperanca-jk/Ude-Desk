const express =require("express");
const mysql = require("mysql");

const app  = express();


const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
        host: "localhost",
        password: "",
        database: "test",
});

app.get("/posts", (req, res) => {
    
    db.query("SELECT * FROM kurslar" ,(err, result) => {
      if(err){   
        console.log("hata "+err);

      } else{
        console.log(result);
        res.send(result);
        console.log("Veri gönderildi.")
        
    
      } 
    })
})
app.get("/postskurs", (req, res) => {
    const id=req.body.i;
  db.query("SELECT * FROM kurslar WHERE id = ?",[id] ,(err, result) => {
    if(err){   
      console.log("hata "+err);

    } else{
      console.log(result);
      res.send(result);
      console.log("Veri gönderildi.")
      
  
    } 
  })
})

app.get("/verusadmin", (req,res) => {
  db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], (err, result) => {

    if(err){
      console.log("hata Login"+err);
      res.send({err:err});
    } 
    
    
      if(result.length > 0){
        res.send(result);
        

      }else{
        res.send({message:"0"});
        console.log(username+": isimli kullanıcı Giriş yaptı");
      }
    
    
})
})

app.post("/cek", (req, res) => {
  const username = req.body.username;
  const point= req.body.point;
    
    db.query("SELECT * FROM kurslar" ,(err, result) => {
      if(err){   
        console.log("hata "+err);

      } else{
        console.log(result);
        res.send(result);
        console.log("Veri gönderildi.")
      } 
    })
})

app.post("/logout", (req, res) => {
  const username = req.body.username;
  const point= req.body.point;


  


    db.query("UPDATE user SET status = 0, adminstatus=0,point=? WHERE user.username = ?", [point,username], (err, result) => {
      if(err){   
        console.log("hata Register"+err);

      } else{
        console.log(result);
      } 
    }) 
    
    db.query("SELECT * FROM kurslar" ,(err, result) => {
      if(err){   
        console.log("hata "+err);

      } else{
        console.log(result);
        res.send(result);
        console.log("Veri gönderildi.")
      } 
    })
})
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const perm = 0;
  


    db.query("INSERT INTO user (username, password,perm) VALUES (?,?,?)", [username, password, perm], (err, result) => {
      if(err){   
        console.log("hata Register"+err);

      } else{
        console.log(result);
      } 
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const status = 1;
    


      if(username=="1" && password=="1" || username=="2" && password=="2"){
        db.query("UPDATE user SET adminstatus = 1 WHERE user.username = ?",[username], (err, result) => {

          if(err){
            console.log("hata Login"+err);
            res.send({err:err});
          } 
          
          
            if(result.length > 0){
              res.send(result);
              
  
            }else{
              console.log(username+": Admin Giriş yaptı");
            }
          
          
      })
      }


  
      db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], (err, result) => {
        
          if(err){
            console.log("hata Login"+err);
            res.send({err:err});
          } 
          
          
            if(result.length > 0){
              res.send(result);
              

            }else{
              res.send({message:"0"});
            }
          
          
      })
      db.query("UPDATE user SET status = 1 WHERE user.username = ?",[username], (err, result) => {

        if(err){
          console.log("hata Login"+err);
          res.send({err:err});
        } 
        
        
          if(result.length > 0){
            res.send(result);
            

          }else{
            console.log(username+": isimli kullanıcı Giriş yaptı");
          }
        
        
    })
    
  })

  app.post("/verusadmin", (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;

    const perm = perm;
    
  
  
      db.query("UPDATE user SET user.username = ? AND user.password = ? AND user.perm = ? AND user.id = ?  VALUES (?,?,?)", [username, password, perm,id], (err, result) => {
        if(err){   
          console.log("hata Register"+err);
  
        } else{
          console.log(result);
        } 
      })
  })
  
app.listen(3001, () => {
    console.log("Running Server");
});



// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "",
//   password: "",
//   database: 'test'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM user", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// // const mysql = require('mysql2');

// const connection = mysql.createPool({
//     host: "localhost",
//     user: "",
//     password: "",
//     database: ""
//     // here you can set connection limits and so on
// });

// module.exports = connection;

// //put these on destination page
// const connection = require('../util/connection');

// async function getAll() {
//     const sql = "SELECT * FROM user";
//     const [rows] = await connection.promise().query(sql);
//     return rows;
// } 
// exports.getAll = getAll;