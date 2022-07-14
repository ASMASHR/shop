const mongoose=require('mongoose')

var Marqueschema=new mongoose.Schema({
    
    MarqueName:String,
    MarqueImg:String,
    MarqueDesc:String,
     CategorieProducts:[{type:mongoose.Schema.Types.ObjectId,
    ref: 'Product'}]
    
},{ timestamps: true, collection: 'Marques' });

module.exports=mongoose.model("Marques",Marqueschema)