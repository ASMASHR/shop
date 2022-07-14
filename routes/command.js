var express=require('express')
var CommandRouter=express.Router()
const Command=require('../Models/Command')
const User=require('../Models/User')


CommandRouter.put('/ConfirmCommande',async(req,res)=>{

let {CmdRef}=req.body
console.log("CmdRef",CmdRef)
try {
let newCmd= await   Command.findOneAndUpdate({CmdRef},{$set:{Confirmed:true}})
      res.json(newCmd)    
} 
catch (error) {
  res.status(500).send({message:"Error while adding product"})
  
}
})
CommandRouter.post('/PasserCommande',async(req,res)=>{

let {Client,TotalProducts,LivMeth,PaimentMeth,CmdRef}=req.body
console.log("Client",Client)
console.log(TotalProducts)
try {
let newCmd= await  new Command({Client,CmdRef,TotalProducts,LivMeth,PaimentMeth})
newCmd.save()
//  res.status(200).send({msg: "cmd added",newCmd})
      res.json(newCmd)    
            //  res.status(200).send({message:" success ",newCmd}) 
} 
catch (error) {
  res.status(500).send({message:"Error while adding product"})
  
}
})

CommandRouter.get('/',async(req,res)=>{
  try {
    const cmd= await Command.find({}).populate({path: 'Client',select: 'firstName lastName'}).populate({ path: 'TotalProducts',populate: 'ProductId'});
    
    res.json(cmd)
} catch(error)
    { 
 
        return res.status(500).send({message : "error get orders"})

    } 
})
CommandRouter.get('/LastOrders',async(req,res)=>{
  try {
    const cmd= await Command.find({}).populate({path: 'Client',select: 'firstName lastName'}).populate({ path: 'TotalProducts',populate: 'ProductId'}).limit(5);
    
    res.json(cmd)
} catch(error)
    { 
 
        return res.status(500).send({message : "error get orders"})

    } 
})
CommandRouter.get('/Incomes',async(req,res)=>{
  try {
    const cmd= await Command.aggregate([
    {   $match: {
      createdAt: {
        $gte: new Date("2022-01-01")
      } 
    } 
  },
    { "$group": {
        "_id": {"month": { "$month": "$createdAt" }},
        "totalValue": { $sum: "$TotalPrice" }
    }}
])
// , "$lte": new Date("2014-05-29")
    res.json(cmd)
} catch(error)
    { 
 
        return res.status(500).send({message : "error get orders"})

    } 
})
CommandRouter.get('/:_id',async(req,res)=>{
  let {_id}=req.params
  try {
    const cmd= await  Command.findById({_id}).populate({path: 'Client', select: 'firstName lastName'})
    // .populate({path:'TotalProducts.ProductId'})
    res.json(cmd)
} catch(error)
    { 
 
        return res.status(500).send({message : "error get order"})

    } 
})
CommandRouter.get('/CmdHistory/:clientId',async(req,res)=>{
  let {clientId}=req.params
  console.log("clientId",clientId)
  try {
    const Historycmd= await  Command.find({Client:clientId}).populate({ path: 'TotalProducts',populate: 'ProductId'})
    // 
    res.json(Historycmd)
    console.log(Historycmd)
} 
catch(error)
    { 
 
        return res.status(500).send({message : "error get orders"})

    } 
})
module.exports = CommandRouter 