import React from "react";
import './Header.css';
import {
    Link
  } from "react-router-dom";
  

const Header = () => {
    return(
        <div>
        <div className="header-container">
           <h3 className="title-name">DELIA DANUT</h3>
           <nav>
               <Link to="/Home"><button className="button btn-home">HOME</button></Link>
               <Link to="/CV"><button className="button btn-cv">My CV</button></Link>
               <Link to="/ShowOffPage"><button className="button btn-show">Show Off Page</button></Link>
               <Link to="/Contact"><button className="button contact">Contact</button></Link>
           </nav>
        </div>
        <hr className="hr-header"/>
        </div>
   
        
    )
}
export default Header;
