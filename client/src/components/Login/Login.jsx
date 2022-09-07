import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    email:"",
password:""
});
const {email,password}=formData;

const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`https://priyaappfood.herokuapp.com/users`,formData);
    setFormData({email:"",password:""})
    navigate('/');
    alert("login successfuly")
   
  }

  return (
    <>
    <div className='loginContainer'>
        <div className='loginform'>
          <form onSubmit={handleSubmit}>
          <div>
        <label htmlFor="">Email Id:</label>
        </div>
        <div>
            
            <input type="email" name="email" value={formData.email} onChange={hanldeChange} placeholder='email...'/>
        </div>
        <div>
        <label htmlFor="">Password:</label>
        </div>
        <div>
            
            <input type="password" name="password" value={formData.password} onChange={hanldeChange} placeholder='password...'/>
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
          </form>
        
        </div>
        
    </div>
    </>
    
  )
}
