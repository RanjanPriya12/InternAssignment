import React from 'react';
import './Login.css';

export const Login = () => {
  return (
    <div className='loginContainer'>
        <div className='loginform'>
        <div>
        <label htmlFor="">Email Id:</label>
        </div>
        <div>
            
            <input type="email" placeholder='email...'/>
        </div>
        <div>
        <label htmlFor="">Password:</label>
        </div>
        <div>
            
            <input type="password" placeholder='password...'/>
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
        </div>
        
    </div>
  )
}
