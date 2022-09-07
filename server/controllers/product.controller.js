const express=require('express');
const PRODUCT=require('../models/product.model');

const router=express.Router();

router.post('/',async(req,res)=>{
    try {
        const product= await PRODUCT.create(req.body);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.get('/',async(req,res)=>{
    try {
        const products= await PRODUCT.find().lean().exec();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.get('/:id',async(req,res)=>{
    try {
        const product= await PRODUCT.find(req.params.id).lean().exec();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try {
        const product= await PRODUCT.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

router.patch('/:id',async(req,res)=>{
    try {
        const product= await PRODUCT.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          }).lean().exec();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router;