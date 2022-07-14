const { header } = require('express-validator')
const jwt=require('jsonwebtoken')
const User=require('../Models/User')

const ClientAuth=(req,res,next)=>{
  if(req.user.role==="Client")
  { next()} 
  else 
  {res.status(403).send()} 
}
module.exports=ClientAuth