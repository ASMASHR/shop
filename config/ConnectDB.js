const  mongoose  = require("mongoose")
require('dotenv').config({ path: './config/.env' })
const ConnectDB=async()=>{
try {
    await mongoose.connect(process.env.Mongo_URI)
    // ,{useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true}
console.log("the database is already connected")

} catch (error) {
console.log(error)  
}  
}
module.exports=ConnectDB