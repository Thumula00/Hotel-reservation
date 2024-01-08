const express = require('express')
var router = express.Router()
var md5 = require('md5');
var ObjectID= require('mongoose').Types.ObjectId

var { User } = require('../models/User')

router.post('/login', async (req, res) => {
    let user_data = await User.findOne({ email: req.body.email });
    if (user_data) {
        if(md5(req.body.password)==user_data.password)
        {
            if(user_data.type=="admin"){
                res.send(JSON.stringify({"res":"admin",id:user_data._id}));
            }else{
                res.send(JSON.stringify({"res":"user",id:user_data._id}));
            }
        }else{
            res.status(500).send(JSON.stringify({"err":"Incorrect Password"}));
        }
    } else {
        res.status(500).send(JSON.stringify({"err":"User not found"}));
    }
});

router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    User.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var temp_record= new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: md5(req.body.password),
        type: req.body.type,         
    })

    temp_record.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
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

    User.findByIdAndUpdate(req.params.id, { $set: temp_record},{new:true}, (err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send(req.params.id)
    }

    User.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            console.log(JSON.stringify(err,undefined,2))
        }
    })
})

module.exports = router