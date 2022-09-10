import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { SortFilter } from '../SortFilter/SortFilter';
import './Products.css';


export const Products = () => {
    const [Products,setProducts]=useState([]);
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const [isLoading,setIsLoading]=useState(true);
    const [totalCount, setTotalCount]=useState(10);

    const getData=async()=>{
        try {
            const res=await axios.get(`https://priyaappfood.herokuapp.com/foods?_page=${page}&_limit=10`);
            console.log(res);
            const data=res.data;
            setIsLoading(false);
            setTotalCount(Number(res.headers["x-total-count"]));
            console.log(totalCount);
            setProducts(data);
            setData(data);
        } catch (error) {
            console.log('err',error);
        }
    }

    const sortHandler = (value) => {
        console.log(value);
        if (value === "htl") {
          setProducts([...(Products).sort((a, b) => b.price - a.price)]);
        } else if (value === "lth") {
          setProducts([...(Products).sort((a, b) => a.price - b.price)]);
        } else {
          setProducts(Products);
        }
      };

      const filterHandler = (value) => {
        console.log(value);
        if (value === "b") {
          setProducts(
            data
              .filter((el) => el.category == "Breakfast")
          );
        } else if (value === "l") {
          setProducts(
            data
              .filter((el) => el.category == "lunch")
          );
        }
        else if (value === "s") {
            setProducts(
              data
                .filter((el) => el.category == "snacks")
            );
          } else if (value === "d") {
          setProducts(
            data
              .filter((el) => el.category == "dinner")
          );
        }else {
          setProducts(data);
        }
      };
    

    useEffect(()=>{
        getData();
    },[page]);
  return (
    <>
    {isLoading && (
        <div>
          <p style={{color:"red", fontSize:"20px", textAlign:"center"}}>Loading...</p>
        </div>
      )}
    
    {!isLoading && (<div><SortFilter sortHandler={sortHandler} filterHandler={filterHandler}/>
    <div className='productsContainer'>
        
        {Products.map((el)=>(
             <Link className='link1' key={el._id} to={`/products/${el._id}`}><Cart className="cart" el={el}/></Link>
        ))}
    </div></div>)}
    
    </>
    
  )
}
