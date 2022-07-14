const mongoose=require('mongoose')

var Productschema=new mongoose.Schema({
    ProductName:String,
    ProductImg:String,
    reference:String,
    Price:Number,
    Promo:{
        type:Number,
        default:0
    },
    countInStock:Number,
    Description:String,
    nbSale:Number,
    Subcategorie:{type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory'},
    categorie:{type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'},
    marque:{type: mongoose.Schema.Types.ObjectId,
    ref: 'Marques'},
    rate:[{
        ClientId:{type: mongoose.Schema.Types.ObjectId,
    ref: 'User'},
        rating:Number
    }],
    TotalRate:Number
    
    
    
},{ timestamps: true, collection: 'Product' });

module.exports=mongoose.model('products',Productschema)