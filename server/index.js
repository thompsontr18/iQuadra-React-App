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
  const id = req.body.id;
  const q = "UPDATE communitycollegedata SET Notes=? where id=?;";
  db.query(q, [Comment, id], (err, result) => {
    if (err) {
      console.error('Error updating item:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    console.log('Item updated:', result);
    console.log(res.status(200).json(result));
  });
});

app.listen(8800, ()=>{
	console.log("Connected to backend");
});
