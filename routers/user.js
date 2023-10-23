const expres = require('express');
const routs = expres.Router();

routs.get("/",(req, res)=>{
    res.send({data:"get all users data"})
})
routs.get("/create",(req, res)=>{
    res.send({data:"create the user data"})
})
routs.get("/update",(req, res)=>{
    res.send({data:"update the user data"})
})

module.exports = routs;