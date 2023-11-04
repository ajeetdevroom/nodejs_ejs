const expres = require('express');
const routs = expres.Router();

routs.get("/",(req, res)=>{
    res.send({data:"login user"})
});
routs.get("/new_password",(req, res)=>{
    res.send({data:"new_password the user data"})
});
routs.get("/forget_password",(req, res)=>{
    res.send({data:"forget_password the user data"})
});
module.exports = routs;