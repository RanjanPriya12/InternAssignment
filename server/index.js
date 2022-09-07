const express=require('express');
const connectDB=require('./configs/db');
const productController=require('./controllers/product.controller');
const userController=require('./controllers/user.controller');
require('dotenv').config();
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/users',userController);
app.use('/foods',productController);


const port=process.env.PORT || 8080;
app.listen(port,async()=>{
    try {
        await connectDB();
    } catch (error) {
        console.log('err',error);
    }
    console.log(`app is running at port number http://localhost:${port}`);
});