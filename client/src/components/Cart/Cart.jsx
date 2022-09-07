import React from 'react';
import './Cart.css';

export const Cart = ({el}) => {
    //console.log(el);
  return (
    <div className='cartContainer'>
        <div className='imageDiv'>
            <img src={el.image} alt="image" />
        </div>
        <div>
            <h3>{el.title}</h3>
            <div className='flex'>
                <p>Price : {el.price} Rs.</p>
                <p>Offer : {el.discount}% OFF</p>
            </div>
            <b>Rating : {el.rating} Star</b>
        </div>
    </div>
  )
}
