import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import './Products.css';


export const Products = () => {
    const [Products,setProducts]=useState([]);

    const getData=async()=>{
        try {
            const res=await axios.get(`https://priyaappfood.herokuapp.com/foods`);
            const data=res.data;
            //console.log(data);
            setProducts(data);
        } catch (error) {
            console.log('err',error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div className='productsContainer'>
        {Products.map((el)=>(
             <Link className='link1' key={el._id} to={`/products/${el._id}`}><Cart className="cart" el={el}/></Link>
        ))}
    </div>
  )
}
