const express=require('express')
const path=require('path')
const Port=process.env.PORT||5000
var bodyParser = require('body-parser')
const Authrouter=require('./routes/user')
const clientRoute=require('./routes/client')
const ProductRouter=require('./routes/product')
const PromosRouter=require('./routes/topPromos')
const CategoriesRouter=require('./routes/categories')
const MarquesRouter=require('./routes/marque')
const CommandRouter=require('./routes/command')
const Messageroute=require('./routes/messages')
const ConnectDB=require('./config/ConnectDB')
const SubCatRouter=require('./routes/subCategory.js')
const app=express()

ConnectDB()


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use('/api/auth',Authrouter)
app.use('/api/Users',clientRoute)
app.use('/api/topPromos',PromosRouter)
app.use('/api/categories',CategoriesRouter)
app.use('/api/Marques',MarquesRouter)
app.use('/api/Orders',CommandRouter)
 app.use('/api/messages',Messageroute)
app.use('/api/Products',ProductRouter)
app.use('/api/SubCategory',SubCatRouter)

const { uploadImage } = require('./middelware/validator')

app.post('/uploadImg',uploadImage,async(req,res)=>{
   
   let Newpic=req.file
   console.log(req.file)

     
     console.log("Newpic",Newpic)
    var MarqueImg = Newpic.path.substring(Newpic.path.lastIndexOf('\\') + 1); 
req.json(res.json(MarqueImg))
// try {
//     // let newMarque= await  new Marque({MarqueName,MarqueImg,MarqueDesc})
//     // newMarque.save()
//     //     
// } catch (error) {
//     res.status(500).send({msg:"Error while adding Marque"})
    
// }
})



// port
app.listen(Port,(err)=>{
    (err)?console.log(err):console.log(`the server is running on port ${Port}`)
})