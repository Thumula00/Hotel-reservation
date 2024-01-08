const mongoose = require('mongoose')

var Hotel = mongoose.model('Hotel',{
    name: {type:String,required:true},
    description: {type:String,required:true},
    image: {type:String,required:true, unique: true},
    minPrice: {type:Number,required:true},
    maxPrice: {type:Number,required:true},
    status: {type:String,required:true},
    category: {type:String,required:true},
})

module.exports = { Hotel }