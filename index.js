const express = require('express')
const jwt =require("jsonwebtoken")
const app = express()
let count = 0;
app.use(function (req, res, next) {
  count = count + 1;
  console.log("Middalware is running....")
  next()

})
//link ejs npm
app.set("view engine", "ejs");
// add public folder
app.use(express.static("./public"));
// render html page
app.get('/', function (req, res, next) {
  res.render("index",{name:"Ajeet Kumar"});
})
app.get('/num', function (req, res, next) {
  res.send({ count })
})
//through error
app.get('/error', function (req, res, next) {
  throw Error("I useg the error url")
  //after throw error it will find erre handler
})
app.get('/num/:amit', function (req, res, next) {
  console.log(req)
  res.send(`count from ${req.params.amit}`)
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