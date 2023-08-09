import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app=express();

app.use(express.json());
app.use(cors())

const db= mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"password",
	database:"collegedata"
});

app.get("/",(req, res)=>{
  const q = "SELECT * FROM communitycollegedata;";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/comment",(req, res)=>{
  const Comment = req.body.Comment;
  const Course = req.body.Course;
  const Major = req.body.Major;
  const College = req.body.College;
  const q = "UPDATE communitycollegedata SET Notes=? where Courses=? and Majors=? and Colleges=?;";
  db.query(q, [Comment, Course, Major, College], (err, result) => {
    if (err) {
      console.error('Error updating item:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    console.log('Item updated:', result);
    console.log(res.status(200).json(result));
  });
});

app.get("/search",(req, res)=>{
  const q = `SELECT * FROM communitycollegedata where ${req.query.Category} like "%${req.query.SearchFeild}%";`;
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// app.get("/search", (req, res) => {
//   console.log(req.query);    
//   });


app.listen(8800, ()=>{
	console.log("Connected to backend");
});
