var express=require('express')
var Authrouter=express.Router()
var jwt = require('jsonwebtoken');
var bcrypt=require('bcrypt')
const User=require('../Models/User')
const isAuth=require('../middelware/isAuth')

const StudentAuth=require('../middelware/ClientAuth')
const AdminAuth=require('../middelware/adminAuth')
const {registerRules,loginRules,Validator}=require("../middelware/validator");



// REGISTER STUDENT 
Authrouter.post('/Register',registerRules(),Validator,async(req,res)=>{
    // role:"Client""Administrator")
    //  first thing: add an Administrator--- role="Administrator" while registre
    const role="Client"
    let profilePic=""
    let imgMale="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
    let imgFemale="https://icons-for-free.com/iconfiles/png/512/female+person+user+woman+young+icon-1320196266256009072.png"
    let {firstName,lastName,Address,email,password,birthDay}=req.body
       try {
        let user=await User.findOne({email})
       
        if(user){
            res.json({message : 'the user is already exist' })
        }
        // if (gender==="male") {profilePic=imgMale}
        // else
        // {profilePic=imgFemale}
// passwordprofilePic
else{
    // console.log("password",password.length)
    // password
    if (password.length==0)
    {
        function strRandom(o) {
  var a = 10,
      b = 'abcdefghijklmnopqrstuvwxyz',
      c = '',
      d = 0,
      e = ''+b;
  if (o) {
    if (o.startsWithLowerCase) {
      c = b[Math.floor(Math.random() * b.length)];
      d = 1;
    }
    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}
password=strRandom({
  // includeUpperCase: true,
  includeNumbers: true,
  length: 6,
  startsWithLowerCase: true
});

    }

    // 
let newpass=password
let user= new User({firstName,lastName,password,email,Address,birthDay,role})

    // crypt the password
        const hashedPassword=await bcrypt.hash(password,10)
        user.password=hashedPassword
        await user.save()

    const paylod={
            _id:user._id
        }
        const token =await jwt.sign(paylod,process.env.privateKey);
        res.status(200).send({message:"Register success ",user,token,newpass})
// 
}
}
  catch (error) {
           res.status(500).send({message : "Register error " })
}
})

// Login
Authrouter.post('/Login',loginRules(),Validator,async(req,res)=>{
    const {email, password}=req.body
    try {
        const user= await User.findOne({email})
        if(!user){
            return res.status(400).send({msg:"the user does not exist"})
        }
        
        const isMatch=await bcrypt.compare(password , user.password )
        if (!isMatch)
            
         {
            return res.status(400).send({msg:"the password is wrong"})
        }
        const payload ={
            _id : user._id
        }
        user.lastLogin=Date.now()
        user.save()
        const token = await jwt.sign(payload , process.env.privateKey)
        res.status(200).send({message : "Login Success" , user ,token})
    }
    catch(error)
    {
        return res.status(500).send({message : "Login error"})

    } 
    })

// Student Dashbord
Authrouter.get('/Dashboard',isAuth,(req,res)=>{
    res.send({user:req.user})
})

Authrouter.post('/findByMail',async(req,res)=>{
    let {email}=req.body
// console.log("email",email)
    try {
        let user=await User.findOne({email})
        let exist=true
        // console.log(user)
            if (user)
            {
                res.json(exist)}
            else
            { exist=false
                res.json(exist)}
}
catch (error) {
        res.status(500).send({message : "Register error " })
}
})
module.exports=Authrouter