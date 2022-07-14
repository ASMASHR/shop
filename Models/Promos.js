const mongoose=require('mongoose')
var Promoschema=new mongoose.Schema({
    PromoAffich:String,
    PromoName:String,
    Description:String,
    Ref:String,
    Articles:[],
    Promo:Number,
    Price:Number,
    nbSale:{type:Number,default:0},
    countInStock:Number,
    Note:{type:Number,default:0}
},{ timestamps: true, collection: 'Promos' });

module.exports=mongoose.model('Promosts',Promoschema)