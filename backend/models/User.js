const mongoose = require('mongoose')

var User = mongoose.model('User',{
    name: {type:String,required:true},
    phone: {type:String,required:true},
    email: {type:String,required:true, unique: true},
    password: {type:String,required:true},
    type: {type:String,required:true},
})

module.exports = { User }