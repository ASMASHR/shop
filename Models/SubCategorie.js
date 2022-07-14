const mongoose=require('mongoose')
const subCategorySchema = mongoose.Schema({
    SubCat_name: {
        type: String,
        required: true,
    },
    Category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    }],
})

module.exports = mongoose.model('SubCategory', subCategorySchema);
