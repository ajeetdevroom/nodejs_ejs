const express = require('express');
const path = require("path");
const multer = require("multer");

// create express server
const app = express();

// add folder path for uploading file 
const upload = multer({dest:"uploads/"});

//start link ejs npm
app.set("view engine", "ejs");

// add public folder
app.use(express.static("./public"));

// add html file path
app.set("views", path.resolve("./views"));

// api for base urk (/)
app.get('/',  (req, res, next)=> {
  return res.render("index");
});

//api for upload
app.post('/upload', upload.single('uploadFileElm'), (req, res,next)=> {
  console.log(req.body);
  console.log(req.file)
  return res.redirect("/")
});

app.listen(3000);