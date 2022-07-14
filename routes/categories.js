var express=require('express')
var CategoriesRouter=express.Router()
const Categorie=require('../Models/Categorie')
const Products=require('../Models/Product')
// Add categorie
CategoriesRouter.put('/AddSousCategorie/:_id',async(req,res)=>{
  let {_id}=req.params 
  let {CategorieName}=req.body
try {
let newCategorie= await Categorie.findById({_id})
newCategorie.categoriesList.push(CategorieName)
newCategorie.save()
res.json(newCategorie)
        
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})

}
})
CategoriesRouter.post('/AddCategorieParent',async(req,res)=>{
    let {cat_Name}=req.body
try {
let newCategorie= await  new Categorie({cat_Name})
newCategorie.save()
res.json(newCategorie)
        
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})

}
})
CategoriesRouter.get('/',async(req,res)=>{
  try {
    const allCategories= await  Categorie.find({})
      let allP=await Products.find({})
    for(let i=0;i<allCategories.length;i++)
    {
      for(let j=0;j< allP.length;j++)
      {
        if(allCategories[i]._id===allP[j].categorie)
          allCategories[i].CategorieProducts.push(allP[j])
          
      }

    }
    res.json(allCategories)
} catch(error)
    {
        return res.status(500).send({message : "error get Categories"})

    } 
})
CategoriesRouter.get('/:_id',async(req,res)=>{
let {_id}=req.params
    try {
    const product= await  Categorie.findById({_id})
res.json(product)
} catch(error)
    {
        return res.status(500).send({message : "error get  product"})

    } 
})
CategoriesRouter.get('/CategorieName',async(req,res)=>{
let {CategorieName}=req.params
    try {
    const product= await  Categorie.findById({_id})
res.json(product)
} catch(error)
    {
        return res.status(500).send({message : "error get  product"})

    } 
})
CategoriesRouter.post('/EditCategorie/:_id',async(req,res)=>{
  let {_id} =req.params 
  let {CategorieNewName}=req.body
try {
let updatedCategorie= await   Categorie.findByIdAndUpdate({_id},{$set:{CategorieName:CategorieNewName}})
updatedCategorie.save()
res.json(updatedCategorie)
        
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})
    
}
})
CategoriesRouter.post('/DeleteCategorie/:_id',async(req,res)=>{
  let {_id} =req.params 
try {
let DeletedCategorie= await   Categorie.findByIdAndDelete({_id})
DeletedCategorie.save()
        res.json(DeletedCategorie)
} catch (error) {
  res.status(500).send({msg:"Error while adding Categorie"})
    
}
})


module.exports=CategoriesRouter