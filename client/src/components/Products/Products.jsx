import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { SortFilter } from '../SortFilter/SortFilter';
import './Products.css';


export const Products = () => {
    const [Products,setProducts]=useState([]);
    const [data,setData]=useState([]);
    const [page,setPage]=useState(10);
    const [itemPerPage,setItemPerPage]=useState(10)
    const [currentPage,setCurrentPage]=useState(1)
    const [isLoading,setIsLoading]=useState(true);


    const getData=async()=>{
        try {
            const res=await axios.get(`https://priyaappfood.herokuapp.com/foods`);
            const data=res.data;
            setIsLoading(false);
            console.log(data);
            setProducts(data);
            setData(data);
        } catch (error) {
            console.log('err',error);
        }
    }

    const numOfTotalPages=Math.ceil(Products.length/itemPerPage)

const pages=[...Array(numOfTotalPages+1).keys()].slice(1)

const indexOfLastItem=currentPage* itemPerPage;
const indexOfFirstItem=indexOfLastItem-itemPerPage;

const visibleItem=Products.slice(indexOfFirstItem,indexOfLastItem)


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
        
        {visibleItem.map((el)=>(
             <Link className='link1' key={el._id} to={`/products/${el._id}`}><Cart className="cart" el={el}/></Link>
        ))}
    </div>
    <p className='paginate'>
{pages.map((page)=>{
    return(
    <span key={page} onClick={()=>setCurrentPage(page)}>{`${page} `}</span>
    )
})}
</p>
    </div>)}
    
    </>
    
  )
}
