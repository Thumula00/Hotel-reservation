const express = require('express')
var router = express.Router()
var ObjectID= require('mongoose').Types.ObjectId

var { Book } = require('../models/Book')
var { Hotel } = require('../models/Hotel')

router.get('/',(req,res)=>{
    Book.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.get('/one/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    Book.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.post('/',(req,res)=>{
    var temp_record= new Book({
        hid: req.body.hid,
        rooms: req.body.rooms,
        adate: req.body.adate,
        ddate: req.body.ddate,
        ac: req.body.ac,
        user_id: req.body.user_id,   
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
        hid: req.body.hid,
        rooms: req.body.rooms,
        adate: req.body.adate,
        ddate: req.body.ddate,
        ac: req.body.ac,
        user_id: req.body.user_id, 
    }

    Book.findByIdAndUpdate(req.params.id, { $set: temp_record},{new:true}, (err,docs)=>{
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

    Book.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).send(err)
        }
    })
})

router.get('/:id',async(req,res)=>{
    await Hotel.aggregate([
        { "$addFields": { "hotel_id": { "$toString": "$_id" }}},
        { "$lookup": {
            "from": "books",
            "localField": "hotel_id",
            "foreignField": "hid",
            "as": "temp_data"
        }},
        { $unwind : "$temp_data" },
        {$match:{ 'temp_data.user_id' :req.params.id}}
    ]).then((result) => {
        res.send(result)
      })
      .catch((error) => {
        console.log(error);
      });
})

router.get('/admin/:id',async(req,res)=>{
    await Hotel.aggregate([
        { "$addFields": { "hotel_id": { "$toString": "$_id" }}},
        { "$lookup": {
            "from": "books",
            "localField": "hotel_id",
            "foreignField": "hid",
            "as": "temp_data"
        }},
        { $unwind : "$temp_data" }
    ]).then((result) => {
        res.send(result)
      })
      .catch((error) => {
        console.log(error);
      });
})

module.exports = router