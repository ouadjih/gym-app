import "./sidebar.css";
import { Link } from "react-router-dom";
import { MdDashboard, MdFoodBank, MdQueryStats } from "react-icons/md";
import { GiStrong } from "react-icons/gi";
import {GrLogout } from"react-icons/gr"
import { AiOutlineLeft, AiOutlineRight, AiOutlineUserAdd } from "react-icons/ai";
import { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";


const Sidebar = () => {
 const [sideBar,setSideBar] = useState(true)

 function toggleSidebar(){
  setSideBar(!sideBar)
 }
 function logout(){
 
  const auth = getAuth();
  signOut(auth).then(() => {
    localStorage.removeItem("user")
    localStorage.clear()
 
  }).catch((error) => {
    console.log(error)
  });
  }

  return (
    <>
     <button className="btn" onClick={toggleSidebar}> {sideBar?<AiOutlineLeft/>:<AiOutlineRight/>} </button>
    {sideBar &&
    <div className="sidebar">
      <div className="top">
     
        <Link to="/"  onClick={logout}>
          <span className="logo">BICEPS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li >
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Features</p>
          <Link to="/AthleteList" style={{ textDecoration: "none" }}>
            <li>
              <GiStrong className="icon" />
              <span>Athletes</span>
            </li>
          </Link>
          <Link to="/new" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineUserAdd className="icon" />
              <span>New Athletes</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <MdQueryStats className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/calories" style={{ textDecoration: "none" }}>
          <li>
            <MdFoodBank className="icon" />
            <span>Calories</span>
          </li>
          </Link>
         <li>
            <GrLogout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>}
  </>);
};

export default Sidebar;
