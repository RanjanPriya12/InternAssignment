const express=require('express');
const USER=require('../models/user.model');

const router=express.Router();

router.post('/',async(req,res)=>{
    try {
        const user= await USER.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.get('/',async(req,res)=>{
    try {
        const users= await USER.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try {
        const user= await USER.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.patch('/:id',async(req,res)=>{
    try {
        const user= await USER.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          }).lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router;