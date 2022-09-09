import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthorized }=useContext(AuthContext);

  const getData = async () => {
    try {
      const query = document.querySelector("#input").value;
      const res = await fetch(`https://priyaappfood.herokuapp.com/foods?q=${query}`);
      const data = await res.json();
      // console.log("Data:", data);
      const search=document.getElementById('input');
      search.addEventListener('keypress',(event)=>{
        if(event.key=='Enter' && data){
          // window.localStorage.removeItem('searched');
          window.localStorage.clear();
            localStorage.setItem('searched',JSON.stringify(data));
            navigate('/search');
            window.location.reload(true);
        }
    });
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <div className="navbar">
        <li>
        <Link className="link" to="/">
          MyfoodApp
        </Link>
      </li>
      <li className="serchbar">
        <input
          id="input"
          onKeyPress={getData}
          type="text"
          placeholder="Search your fav foods..."
        />
      </li>
      <li>
        <Link className="link" to="/add">
          Add Dish
        </Link>
      </li>
      <li>
        <Link className="link" to="/login">
          { isAuthorized? "Login" : "LogOut"}
        </Link>
      </li>
    </div>
  );
};