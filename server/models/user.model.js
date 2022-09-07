const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});

const USER=new mongoose.model('user',userSchema);

module.exports=USER;