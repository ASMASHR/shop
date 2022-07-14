const mongoose=require('mongoose')

var Userschema=new mongoose.Schema({
    // profilePic:String,
    firstName:String,
    lastName:String,
    Address:{
      CodePostal:Number,
      Telephone:Number,
      Ville:String,
      Pays:String
    },
    email:String,
    password:String,
    birthDay:String,
    // gender:String, 
    role:String,
    lastLogin:Date,
},{ timestamps: true, collection: 'users' });

module.exports=mongoose.model("User",Userschema)