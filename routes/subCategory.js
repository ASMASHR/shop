var express=require('express')
var SubCatRouter=express.Router()
const SubCategorie=require('../Models/SubCategorie')
const Products=require('../Models/Product')
// Add categorie
const Categorie=require('../Models/Categorie')
SubCatRouter.post('/AddCategorieParent',async(req,res)=>{
    let {SubCat_name}=req.body
try {
let newCategorie= await  new SubCategorie({SubCat_name})
newCategorie.save()
res.json(newCategorie)
        
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})

}
})
SubCatRouter.put('/AddCategorie/:_id',async(req,res)=>{
    let {name}=req.body
    let {_id}=req.params
try {
 let newCategorie= await  new Categorie({name})
newCategorie.save()
let EditCat=await  SubCategorie.findById({_id})
console.log("first",EditCat)
EditCat.Category.push(newCategorie)
EditCat.save()
res.json(EditCat)
        
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})

}
})
SubCatRouter.get('/',async(req,res)=>{
  try {
    const allCategories= await  SubCategorie.find({}).populate('Category')
    console.log("allCategories",allCategories)
      let allP=await Products.find({})
      console.log(allP)
    res.json(allCategories)
} catch(error)
    {
        return res.status(500).send({message : "error get Categories"})

    } 
})
SubCatRouter.get('/:_id',async(req,res)=>{
let {_id}=req.params
    try {
    const product= await  SubCategorie.findById({_id})
res.json(product)
} catch(error)
    {
        return res.status(500).send({message : "error get  product"})

    } 
})
SubCatRouter.post('/EditCategorie/:_id',async(req,res)=>{
  let {_id} =req.params 
  let {CategorieNewName}=req.body
try {
let updatedCategorie= await   SubCategorie.findByIdAndUpdate({_id},{$set:{CategorieName:CategorieNewName}})
updatedCategorie.save()
res.json(updatedCategorie)
        
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})
    
}
})
SubCatRouter.post('/DeleteCategorie/:_id',async(req,res)=>{
  let {_id} =req.params 
try {
let DeletedCategorie= await   SubCategorie.findByIdAndDelete({_id})
DeletedCategorie.save()
        res.json(DeletedCategorie)
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})
    
}
})


module.exports=SubCatRouter