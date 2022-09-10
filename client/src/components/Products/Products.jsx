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
    const [totalCount, setTotalCount]=useState("");
    const [postPerPage,setPostPerPage]=useState(10)
    const [isLoading,setIsLoading]=useState(true);


    const getData=async()=>{
        try {
            const res=await axios.get(`https://priyaappfood.herokuapp.com/foods?_page=${page}&_limit=10`);
            console.log(res);
            const data=res.data;
            setIsLoading(false);
            // setTotalCount(Number(res.headers["x-total-count"]));
            console.log(totalCount);
            setTotalCount(data.length);
            setProducts(data);
            setData(data);
        } catch (error) {
            console.log('err',error);
        }
    }

    const indexOfLastPage= page+postPerPage;
    const indexOfFirstPage= indexOfLastPage-postPerPage;
    const currentPosts= Products.slice(indexOfFirstPage,indexOfLastPage)

    function handlePagePlus()
    {
      setPage(page+10)
    }
    function handlePageMinus()
    {
      setPage(page-10)
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
    </div>
    <div className='pagination'>
    <button disabled={page === 10} onClick={handlePageMinus}>Previous</button>
    {
      page < Products.length-6 ?  <button disabled={page === Products.length-10} onClick={handlePagePlus}>Next</button>:null
    }
   
    {/* <button disabled={page <= 1}
                    onClick={() => setPage(page - 1)}>Prev</button>
{page}/{Math.ceil(totalCount/10)}
                <button disabled={page * 10 > totalCount}
                    onClick={() => setPage(page + 1)}>Next</button> */}

            </div>
    </div>)}
    
    </>
    
  )
}
