import express from "express";
import mysql from "mysql2";

const app=express();

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"collegedata"
});

app.get("/",(req, res)=>{
    res.json("Hello, I'm the backend");
});

app.get("/search", (req, res) => {
    const q = "SELECT * FROM communitycollegedata";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.listen(8800, ()=>{
    console.log("Connected to backend");
});