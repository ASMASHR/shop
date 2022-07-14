var express=require('express')
var clientRoute=express.Router()
var jwt = require('jsonwebtoken');
var bcrypt=require('bcrypt')
var isAuth= require('../middelware/isAuth')
var ClientAuth = require('../middelware/ClientAuth')
const {editEmailRules,editMPRules,Validator}=require("../middelware/validator");
const User=require('../Models/User')
const {uploadImage}=require("../middelware/validator");
const adminAuth = require('../middelware/adminAuth');

// GET ALL ClientS
clientRoute.get('/',async(req,res)=>{

try {
    const AllClients= await  User.find({"role":"Student"})
    res.json(AllClients)
} catch(error)
    {
        return res.status(500).send({message : "error get Clients server"})

    } 
    })
    clientRoute.get('/NewUsers',async(req,res)=>{

try {
    const NewClients= await  User.find({"role":"Student"}).limit(10)
    res.json(NewClients)
} catch(error)
    {
        return res.status(500).send({message : "error get Clients server"})

    } 
    })
clientRoute.get('/statics',async(req,res)=>{

    const AllClients= await  User.aggregate([{
    $match: {
      createdAt: {
        $gte: new Date("2022-01-01")
      } 
    } 
  }, { 
    $group: {
      _id: { 

        "month": { "$month": "$createdAt" },

      },
      count:{$sum: 1}
    }
  }, 
  {
        $addFields: {
            "_id.month": {
                $switch: {
                   
                    branches: [
                        { case: { $eq: [ "$_id.month", 1 ] }, then: "Jan" },
                        { case: { $eq: [ "$_id.month", 2 ] }, then: "Feb" },
                        { case: { $eq: [ "$_id.month", 3 ] }, then: "Mar" },
                        { case: { $eq: [ "$_id.month", 4 ] }, then: "Apr" },
                        { case: { $eq: [ "$_id.month", 5 ] }, then: "May" },
                        { case: { $eq: [ "$_id.month", 6 ] }, then: "Jun" },
                        { case: { $eq: [ "$_id.month", 7 ] }, then: "Jul" },
                        { case: { $eq: [ "$_id.month", 8 ] }, then: "Agu" },
                        { case: { $eq: [ "$_id.month", 9 ] }, then: "Sep" },
                        { case: { $eq: [ "$_id.month", 10 ] }, then: "Oct" },
                        { case: { $eq: [ "$_id.month", 11 ] }, then: "Nov" },
                        { case: { $eq: [ "$_id.month", 12 ] }, then: "Dec" }
                        
                    ],
                    default: "December"
                }
            }
        }
    },{"$sort": {"createdAt": 1}}]).exec(function(err,data){
    if (err) {
      console.log('Error Fetching model');
      res.status(500).send();
    } else {
      res.json(data);
    }
  });
 

    })

// get one Client
clientRoute.get('/:_id',async(req,res)=>{
const {_id}=req.params

try {
    const Client= await  User.findById(_id)
    res.json(Client)
} catch(error)
    {
        return res.status(500).send({message : "error get Client server"})

    } 
    })

//  EDIT A USER
        //CHANGE THE PROFILE PICTURE 

clientRoute.put('/EditClientPic/:_id',isAuth,ClientAuth,uploadImage,(req,res)=>{
    const {_id}=req.params
    let Newpic=req.file

var imm = Newpic.path.substring(Newpic.path.lastIndexOf('\\') + 1);
    User.findByIdAndUpdate({_id},{$set:{profilePic:imm}})
     .then (user=>res.send({"we update": user}))
    .catch(err=>{console.log(err)})
    })

      //CHANGE THE FIRST AND LAST NAME  ,

clientRoute.put('/EditClientName/:_id',isAuth,ClientAuth,(req,res)=>{
    let {_id}=req.params
    let {FirstName,LastName}=req.body
    User.findByIdAndUpdate({_id},{$set:{firstName:FirstName,lastName:LastName}})
    .then (user=>res.send({"we update": user}))
    .catch(err=>{console.log(err)})
}) 
      //CHANGE the PASSWORD ClientAuth

clientRoute.put('/EditPassword/:_id',isAuth,ClientAuth,editMPRules(),Validator,async(req,res)=>{
    let {_id}=req.params
    let {currentPassword,NewPass,confirmPass}=req.body
    try {
        let person= await User.findById({_id})
        const isMatch = await bcrypt.compare(currentPassword, person.password);
        if (!isMatch) {
            res.status(400).send({ msg: "wrong password" })}
        if(NewPass!==confirmPass)
            {res.status(400).send({msg:"not matches"})}
        let newpassword= await bcrypt.hash(NewPass,10)
        let Updateduser=await User.findByIdAndUpdate({_id},{password:newpassword},{new:true})
            return res.status(200).send({msg: "we update",Updateduser})
        
    }
    catch (error) {
      res.status(500).send({msg : "error server " })
    }
})

// edit Client ADRESS 
clientRoute.put('/EditEmail/:_id',isAuth,ClientAuth,editEmailRules(),Validator,async(req,res)=>{
    let {_id}=req.params
    let {currentEmail,NewEmail,confirmmail}=req.body
    try {
        let client=await User.findById({_id})
        if (client.email!==currentEmail)
            res.status(400).send({ msg: "your current Email is wrong" })
        if(NewEmail!==confirmmail)
            res.status(400).send({ msg: "your confirm Address and your New Adress should be the same" })
        let usr=await User.findOne({email:NewEmail})
        
        
        if(usr){
            return res.status(400).send({msg : 'this email is already exist' })
        }
        else
             {client.email=NewEmail
             client.save()}
            return res.status(200).send({msg: "we update",client})
        
    } catch (error) {
              res.status(500).send({msg : "error server " })
    }
})
    
// -------------------------------
// REMOVE A USER BY ID 
clientRoute.delete('/DeleteUser/:_id',isAuth,adminAuth,(req,res)=>{
     let {_id}=req.params
     User.findByIdAndDelete({_id})
     .then (user=>res.send({"we delete": user}))
    .catch(err=>{console.log(err)})
})

// _______________________________________________


module.exports=clientRoute