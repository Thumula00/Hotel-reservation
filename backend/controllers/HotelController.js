const express = require('express')
var router = express.Router()
var multer = require('multer')
var uniqid = require('uniqid')
var ObjectID= require('mongoose').Types.ObjectId

var { Hotel } = require('../models/Hotel')

router.get('/',(req,res)=>{
    Hotel.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Hotel.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.post('/',(req,res)=>{
    var temp_record= new Hotel({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image_path,
        minPrice: req.body.min_price,
        maxPrice: req.body.max_price,
        status: req.body.status,
        category: req.body.category,    
    })

    temp_record.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    var temp_record={
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: md5(req.body.password),
        type: req.body.type,   
    }

    Hotel.findByIdAndUpdate(req.params.id, { $set: temp_record},{new:true}, (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Hotel.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, uniqid() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

router.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

})
module.exports = router