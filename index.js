const express = require('express')
const jwt =require("jsonwebtoken")
const app = express()


let count = 0;
app.use(function (req, res, next) {
  count = count + 1;
  console.log("Middalware is running....")
  next()

})

// start multi page routing
const loginRoute = require("./routers/login")
const useRouts = require("./routers/user")
app.use('/user',useRouts);
app.use('/login',loginRoute);
// end multi page routing

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/num', function (req, res, next) {
  res.send({ count })
})
app.get('/num/:amit', function (req, res, next) {
  console.log(req)
  res.send(`count from ${req.params.amit}`)
})

app.listen(3000)