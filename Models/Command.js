const mongoose=require('mongoose')

var Commandchema=new mongoose.Schema({
    Confirmed:{type:Boolean,default:false},
    CmdRef:String,
    Client:{type: mongoose.Schema.Types.ObjectId,
    ref: 'User'},
    TotalProducts:[{ProductId:{type: mongoose.Schema.Types.ObjectId,
    ref: 'products'},Quantity:Number}],
    LivMeth:String,
    PaimentMeth:String,
    TotalPrice:Number,
    status:String

},{ timestamps: true, collection: 'Command' });

module.exports=mongoose.model("Commands",Commandchema)