const express = require('express');
const path = require("path");
const multer = require("multer");

// create express server
const app = express();

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

// implement multer
const storage = multer.diskStorage({
  // add folder path for uploading file
  destination: function (req, file, cb) {
    cb(null, 'uploads/files')
  },
  // add file name
  filename: function (req, file, cb) {   
    cb(null, `${file.fieldname}-${Date.now()}`)
  }
})
const upload = multer({ storage: storage })

// //api for single upload
// app.post('/upload', upload.single('uploadFileElm'), (req, res,next)=> {
//   console.log(req.body);
//   console.log(req.file)
//   return res.redirect("/")
// });

//api for muti files upload
app.post('/upload', upload.fields([{name:"uploadFileElm"},{name:"uploadFileElmId2"}]), (req, res,next)=> {
  console.log(req.body);
  console.log(req.file)
  return res.redirect("/")
});

app.listen(3000);