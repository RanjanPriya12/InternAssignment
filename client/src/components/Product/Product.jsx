import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

export const Product = () => {
    const {id} = useParams();
    console.log(id)
    const [product,setProduct]=useState('');

    const getProduct=async()=>{
        try {
            const res=await axios.get(`https://priyaappfood.herokuapp.com/foods/${id}`);
            const item=res.data;
            console.log(item);
            setProduct(item);
        } catch (error) {
            console.log('err',error);
        }
    }

    useEffect(()=>{
        getProduct();
    },[id]);

  return (
    <div className='productContainer'>
       <div className='imageContainer'>
            <img src={product.image} alt="pic" />
            <div>
            <button>Buy Now</button>
            </div>
       </div>
       <div className='productDetails'>
            <h1>Details of Food</h1>
            <b>{product.title}</b>
            <p>Price of single item : {product.price} <b>Rs.</b></p>
            <p>Discount on this product : {product.discount}% OFF</p>
            <p>Rating is : {product.rating} <b>Star</b></p>
            <p>Restaurant : {product.restaurant}</p>
            <p>Category of food is : {product.category}</p>
            <i>{product.description}</i>
       </div>
    </div>
  )
}
