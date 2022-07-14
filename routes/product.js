var express=require('express')
var ProductRouter=express.Router()
const User=require('../Models/User')
const isAuth=require('../middelware/isAuth')
const Products=require('../Models/Product')
const StudentAuth=require('../middelware/ClientAuth')
const AdminAuth=require('../middelware/adminAuth')
const { uploadImage } = require('../middelware/validator')
const Categorie=require('../Models/Categorie')

const Marque=require('../Models/Marque')
// Ajouter Produit Admin Auth
ProductRouter.post('/AddProduct',async(req,res)=>{
    let {ProductName,categorie,Price,Promo,Description,countInStock,marque,ProductImg,Subcategorie}=req.body
    
  
   
try {
    let newProduct= await  new Products({Subcategorie,ProductImg,ProductName,categorie,Price,Promo,Description,countInStock,marque})
    newProduct.save()
    let ProdCat=await Categorie.findById({_id:categorie})
    ProdCat.ProductList.push(newProduct)
    ProdCat.save()
    res.json(ProdCat)
            
} catch (error) {
    res.status(500).send({msg:"Error while adding product"})
    
}
})

// get all products
ProductRouter.get('/',async(req,res)=>{
    try {
        const products= await  Products.find({}).populate("marque").populate("categorie")
        res.json(products)
} catch(error)
    {
        return res.status(500).send({message : "error get products"})

    } 
})
ProductRouter.get('/PromosProducts',async(req,res)=>{
    try {
        const products= await  Products.find({Promo:{ $gt: 0 } }).populate("categorie marque")
        res.json(products)
} catch(error)
    {
        return res.status(500).send({message : "error get products"})

    } 
})
// last 5 /NewProducts
ProductRouter.get('/LatestProducts',async(req,res)=>{
    try {
        const products= await  Products.find({}).sort('-createdAt').limit(5).populate("categorie marque")
        res.json(products)
} catch(error)
    {
        return res.status(500).send({message : "error get the latestproducts"})

    } 
})
// get one Product by Id
ProductRouter.get('/:_id',async(req,res)=>{
let {_id}=req.params
    try {
    const product= await  Products.findById({_id}).populate({ path: 'categorie', select: 'name' }).populate({path:'marque',select:"MarqueImg"})
res.json(product)
} catch(error)
    {
        return res.status(500).send({message : "error get  product"})

    } 
})
// -----------------------a verifier les rts suivants
// top sale Products res.json(product)
ProductRouter.get('/topProduct',async(req,res)=>{
    try {
    const topProd= await  Products.find().sort('nbSale').limit(15)
    res.status(200).send({msg : "top products found" , topProd })
} catch(error)
    {
        return res.status(500).send({msg : "error get top products"})

    } 
})

// get Product by categorie
ProductRouter.get('/categorieProducts/:categorieName',async(req,res)=>{
    let {categorieName}=req.params

    try {
        const cat=await Categorie.findOne({name:categorieName})
     
    const products= await  Products.find({categorie:cat._id}).populate({path: 'categorie',select: 'name'})
    
    res.json(products)
} catch(error)
    {
        return res.status(500).send({message : "error get categori's products"})

    } 
})
ProductRouter.get('/DecPrix/:MarqueName',async(req,res)=>{
    let {MarqueName}=req.params
    try {
            let marquee=await Marque.findOne({MarqueName:MarqueName})
           const products= await Products.find({marque:marquee._id}).populate({path: 'categorie',select: 'name'}).sort({Price:-1})
    
     res.send(products)
} catch (error) {
    console.log(error)
    
}
 
 
})
ProductRouter.get('/CrPrix/:Marquename',async(req,res)=>{
    let {Marquename}=req.params
    try {
            let marquee=await Marque.findOne({MarqueName:Marquename})
           const products= await Products.find({marque:marquee._id}).populate({path: 'categorie',select: 'name'}).sort({Price:1})
    
     res.send(products)
} catch (error) {
    console.log(error)
    
}
 
 
})

// get Product by marque
ProductRouter.get('/:Marquename/Categories',async(req,res)=>{
    let {Marquename}=req.params
try {
            let cat=await Categorie.find({})
            let marquee=await Marque.findOne({MarqueName:Marquename})
            const productsCatego= await Products.aggregate([
    {   $match: {marque:marquee._id}
  },
    { $group: {
        _id:"$categorie",
        
        
    }}])
    
     let x="a"
    let MarqCat=[]
    productsCatego.map(el=>{
        x=cat.find(z=>z._id.toString()==el._id.toString())
        MarqCat.push(x)
    }
        )
       res.send(MarqCat)
} catch (error) {
    console.log(error)
    
}
 
 
})
ProductRouter.get('/NomProd/:Marquename',async(req,res)=>{
    let {Marquename}=req.params
    try {
            let marquee=await Marque.findOne({MarqueName:Marquename})
           const products= await Products.find({marque:marquee._id}).populate({path: 'categorie',select: 'name'}).sort({ProductName:1})
    
     res.send(products)
} catch (error) {
    console.log(error)
    
}
 
 
})
ProductRouter.get('/pr/:Marquename',async(req,res)=>{
    let {Marquename}=req.params
try {
            let marquee=await Marque.findOne({MarqueName:Marquename})
            const products= await  Products.find({marque:marquee._id}).populate({path: 'categorie',select: 'name'})
    res.json(products)

  
} catch (error) {
    console.log(error)
    
}
 
 
})
ProductRouter.get('/QPromotion/:name',async(req,res)=>{
    let {name}=req.params
    try {
            let marquee=await Marque.findOne({MarqueName:name})
           const products= await Products.find({marque:marquee._id}).populate({path: 'categorie',select: 'name'}).sort({Promo:-1})
    
     res.send(products)
} catch (error) {
    console.log(error)
    
}

})
ProductRouter.get('/:Marquename/:CategorieName',async(req,res)=>{
    let {Marquename,CategorieName}=req.params
    try {
            let marquee=await Marque.findOne({MarqueName:Marquename})
            const products= await Products.find({marque:marquee._id}).populate({path: 'categorie',select: 'name'})
  let CategorieProd=products.filter(el=>el.categorie.name===CategorieName)
        
       res.send(CategorieProd)
} catch (error) {
    console.log(error)
    
}
 
 
})






ProductRouter.put('/EditProductQuantity/:_id',async(req,res)=>{
  let {_id} =req.params 
  let {Quantity}=req.body
  
try {
    let x=await   Products.findById({_id})
   
let updatedProduct= await   Products.findByIdAndUpdate({_id},{$set:{countInStock:(x.countInStock-Quantity)}})
updatedProduct.save()
res.status(200).send({msg: "Product Added",updatedProduct})
        
} catch (error) {
  res.status(500).send({msg:"Error while editing Product"})
    
}
})

//delete product
ProductRouter.get('/Delete/:_id',async(req,res)=>{
let {_id}=req.params
    try {
    const product= await  Products.findByIdAndDelete({_id})
        res.json(product)
} catch(error)
    {
        return res.status(500).send({message : "error get  product"})

    } 
})

//give Note to product
ProductRouter.put('/Giverate/:_id', async(req, res) => {
  let {_id}=req.params
  let {ClientId,rating}=req.body
  try {

    let product = await Products.findById({_id})
    let client=product.rate.find(el=>el.clientId==ClientId)
if(client)
{client.rating=rating
 let x=product.rate.map(item => item.rating).reduce((prev, curr) => prev + curr, 0);
product.TotalRate=(x/product.rate.length).toFixed(1)

}   
else
{product.rate.push({ClientId:ClientId,rating:rating})
 let x=product.rate.map(item => item.rating).reduce((prev, curr) => prev + curr, 0);
product.TotalRate=(x/product.rate.length).toFixed(1)


  } 
product.save()
res.json(product)
} catch (error) {
res.status(500).send({error: 'Could not update product rating '})
}

});

// get product  Rating

ProductRouter.get('/Productrate/:_id', async(req, res) => {
  let {_id}=req.params
  try {

    let product = await Products.findById({_id})

res.json(product)
} catch (error) {
res.status(500).send({error: 'Could not get product rate '})
}

});

module.exports=ProductRouter