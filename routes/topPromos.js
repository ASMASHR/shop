var express=require('express')
var PromosRouter=express.Router()
const Promos=require('../Models/Promos')
// uploadImage,
PromosRouter.post('/AddPromo',async(req,res)=>{
    let {PromoName,Ref,Articles,Promo,Description,countInStock,Price}=req.body
// let Newpic=req.file  Categorie   Note
//  var PromoImg = Newpic.path.substring(Newpic.path.lastIndexOf('\\') + 1);
try {
let newPromo= await  new Promos({PromoName,Ref,Articles,Promo,Description,countInStock,Price})
newPromo.save()
res.status(200).send({msg: "Product Added",newPromo})
        
} catch (error) {
  res.status(500).send({msg:"Error while adding product"})
    
}
})
PromosRouter.get('/All',async(req,res)=>{
        try {
    const products= await  Promos.find({})
    res.json(products)
} catch(error)
    {
        return res.status(500).send({message : "error get products"})

    }
})
PromosRouter.get('/LastPromo',async(req,res)=>{
        try {
    const products= await  Promos.find({}).limit(7)
    res.json(products)
} catch(error)
    {
        return res.status(500).send({message : "error get products"})

    }
})
// get one Promo by Id
PromosRouter.get('/:_id',async(req,res)=>{
let {_id}=req.params
    try {
    const product= await  Promos.findById({_id})
res.json(product)
} catch(error)
    {
        return res.status(500).send({message : "error get top products"})

    } 
})

module.exports=PromosRouter