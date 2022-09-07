import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Form.css';

export const Form = () => {

    const [formData,setFormData]=useState({
        title:"",
image:"",
price:"",
discount:"",
category:"",
rating:"",
reataurant:"",
description:""
    });

    const hanldeChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(`http://priyaappfood.herokuapp.com/foods`,formData);
        setFormData('');
    }
  return (
    <div className='formContainer'>
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">Food Title : </label>
            <input type="text" name="title" value={formData.title} onChange={hanldeChange} placeholder='Enter food name...' required/>
        </div>
        <div>
            <label htmlFor="">Image Url: </label>
            <input type="url" name="image" value={formData.image} onChange={hanldeChange} placeholder='Enter image url...' required/>
        </div>
        <div>
            <label htmlFor="">Food Price :</label>
            <input type="Number" name="price" value={formData.price} onChange={hanldeChange} placeholder='Enter food price...' required/>
        </div>
        <div>
            <label htmlFor="">Discount :</label>
            <input type="Number" name="discount" value={formData.discount} onChange={hanldeChange} placeholder='Discount amount...' required/>
        </div>
        <div>
            <label htmlFor="">Food Category :</label>
            <input type="text" name="category" value={formData.category} onChange={hanldeChange} placeholder='food category...' required/>
        </div>
        <div>
            <label htmlFor="">Restaurant Name :</label>
            <input type="text" name="restaurant" value={formData.restaurant} onChange={hanldeChange} placeholder='food rating...' required/>
        </div>
        <div>
            <label htmlFor="">Rating :</label>
            <input type="Number" name="rating" value={formData.rating} onChange={hanldeChange} placeholder='Restaurant name...' required/>
        </div>
        <div>
            <textarea name="description" value={formData.description} onChange={hanldeChange} id="" cols="60" rows="8" required></textarea>
        </div>

        <div>
            <button>Add Food Into DB</button>
        </div>
        </form>
        
    </div>
  )
}

