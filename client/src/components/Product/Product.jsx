import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
    const {id} = useParams();
    console.log(id)
    const [product,setProduct]=useState('');

    const getProduct=async()=>{
        // try {
        //     const res=await axios.get(`https://priyaappfood.herokuapp.com/foods/${id}`);
        //     const item=res.data;
        //     console.log(item);
        //     setProduct(item);
        // } catch (error) {
        //     console.log('err',error);
        // }
        axios
      .get(`https://priyaappfood.herokuapp.com/foods/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
    }

    useEffect(()=>{
        getProduct();
    },[id]);

  return (
    <div>Product</div>
  )
}
