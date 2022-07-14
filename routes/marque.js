var express=require('express')
var MarquesRouter=express.Router()
const Marque=require('../Models/Marque')
const { uploadImage } = require('../middelware/validator')
MarquesRouter.post('/Addphoto',uploadImage,async(req,res)=>{
   
   let Newpic=req.file

  
    var MarqueImg = Newpic.path.substring(Newpic.path.lastIndexOf('\\') + 1); MarqueImg
req.json(res.json(MarqueImg))
// try {
//     // let newMarque= await  new Marque({MarqueName,MarqueImg,MarqueDesc})
//     // newMarque.save()
//     //     
// } catch (error) {
//     res.status(500).send({msg:"Error while adding Marque"})
    
// }
})
// add marque
MarquesRouter.post('/AddMarque',uploadImage,async(req,res)=>{
    let {MarqueName,MarqueDesc,MarqueImg}=req.body


try {
    let newMarque= await  new Marque({MarqueName,MarqueImg,MarqueDesc})
    newMarque.save()
    res.json(newMarque)    
} catch (error) {
    res.status(500).send({msg:"Error while adding Marque"})
    
}
})
// get all marques
MarquesRouter.get('/',async(req,res)=>{
  try {
    const allMarques= await  Marque.find({})
    res.json(allMarques)
} catch(error)
    {
        return res.status(500).send({message : "error get Marques"})

    } 
})
// get merque by id
MarquesRouter.get('/:_id',async(req,res)=>{
        let {_id}=req.params
    try {
        const marque= await  Marque.findById({_id})
        res.json(marque)
} catch(error)
    {
        return res.status(500).send({message : "error get  marque"})

    } 
})

// edit marque name
MarquesRouter.put('/EditMarqueName/:_id',async(req,res)=>{
  let {_id} =req.params 
  let {MarqueNewName}=req.body
try {
let updatedMarque= await   Marque.findByIdAndUpdate({_id},{$set:{MarqueName:MarqueNewName}})
updatedMarque.save()
         res.json(updatedMarque)   
} catch (error) {
  res.status(500).send({msg:"Error while editing Marque"})
    
}
})


// edit marque pic
MarquesRouter.put('/EditMarquePicture/:_id',uploadImage,async(req,res)=>{
  let {_id} =req.params 
   let Newpic=req.file
    var MarqueNewPic = Newpic.path.substring(Newpic.path.lastIndexOf('\\') + 1);
try {
let updatedMarque= await   Marque.findByIdAndUpdate({_id},{$set:{MarqueImg:MarqueNewPic}})
updatedMarque.save()
         res.json(updatedMarque)   
} catch (error) {
  res.status(500).send({msg:"Error while editing Marque"})
    
}
})


// delete marque
MarquesRouter.delete('/DeleteMarque/:_id',async(req,res)=>{
  let {_id} =req.params 
try {
let DeletedMarque= await   Marque.findByIdAndDelete({_id})
DeletedMarque.save()
res.json(DeletedMarque)   
} catch (error) {
  res.status(500).send({msg:"Error while Deleting Marque"})
    
}
})

module.exports=MarquesRouter