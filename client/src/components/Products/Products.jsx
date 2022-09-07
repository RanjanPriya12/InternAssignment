import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { SortFilter } from '../SortFilter/SortFilter';
import './Products.css';


export const Products = () => {
    const [Products,setProducts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalCount, setTotalCount]=useState(10);

    const getData=async()=>{
        try {
            const res=await axios.get(`https://priyaappfood.herokuapp.com/foods?_page=${page}&_limit=10`);
            const data=res.data;
            setTotalCount(Number(res.headers["x-total-count"]));
            console.log(totalCount);
            setProducts(data);
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
            Products
              .filter((data) => data.category == "Breakfast")
          );
        } else if (value === "l") {
          setProducts(
            Products
              .filter((data) => data.category == "lunch")
          );
        }
        else if (value === "s") {
            setProducts(
              Products
                .filter((data) => data.category == "snacks")
            );
          } else if (value === "d") {
          setProducts(
            Products
              .filter((data) => data.category == "dinner")
          );
        }else {
          setProducts(Products);
        }
      };
    

    useEffect(()=>{
        getData();
    },[page]);
  return (
    <>
    <SortFilter sortHandler={sortHandler} filterHandler={filterHandler}/>
    <div className='productsContainer'>
        
        {Products.map((el)=>(
             <Link className='link1' key={el._id} to={`/products/${el._id}`}><Cart className="cart" el={el}/></Link>
        ))}
    </div>
    <div className='pagination'>
    <button disabled={page <= 1}
                    onClick={() => setPage(page - 1)}>Prev</button>
{page}/{Math.ceil(totalCount/10)}
                <button disabled={page * 10 > totalCount}
                    onClick={() => setPage(page + 1)}>Next</button>

            </div>
    </>
    
  )
}
