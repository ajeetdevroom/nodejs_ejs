const express = require('express')
const jwt =require("jsonwebtoken")
const app = express()
let count = 0;




//start link ejs npm
app.set("view engine", "ejs");
// add public folder
app.use(express.static("./public"));
// render html page
app.get('/', function (req, res, next) {
  res.render("index",{name:"Ajeet Kumar"});
})

//through error
app.get('/error', function (req, res, next) {
  throw Error("I useg the error url")
  //after throw error it will find erre handler
})
//erre handler
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)