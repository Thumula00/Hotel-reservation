const mongoose = require('mongoose')

var Book = mongoose.model('Book',{
    hid: {type:String,required:true},
    rooms: {type:String,required:true},
    adate: {type:String,required:true, unique: true},
    ddate: {type:String,required:true},
    ac: {type:String,required:true},
    user_id: {type:String,required:true},
})

module.exports = { Book }