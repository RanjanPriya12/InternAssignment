const mongoose=require('mongoose');


const foodSchema= new mongoose.Schema({
    title:{type:String, required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    rating:{type:Number,required:true},
    category:{type:String,required:true},
    restaurant:{type:String, requird:true},
    description:{type:String,required:true}
},{
    timeseries:true,
    versionKey:false
});

const FOOD= new mongoose.model('food',foodSchema);

module.exports=FOOD;