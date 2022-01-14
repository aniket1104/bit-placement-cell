import React from "react";
import logo from "../assets/img/bitlogo.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between header">
  <div class="container-fluid">
    <div className="d-flex logo">
          <img src={logo} alt="logo" width="60" />
           <div className="clgName">
             <h3>Bangalore</h3>
             <h3>Institute of</h3>
             <h3>Technology</h3>
           </div>
         </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to="/">
             <li className="nav-item px-3">
                 <a className="nav-link link" aria-current="page" href="#">
                   Home
                 </a>
               </li>
             </Link>
             <Link to="#">
               <li className="nav-item px-3">
                 <a className="nav-link link" aria-current="page" href="#">
                   Mission
                 </a>
               </li>
             </Link>
             <Link to="#">
               <li className="nav-item px-3">
                 <a className="nav-link link" href="#">
                   Placement
                 </a>
               </li>
             </Link>
             <Link to="#">
               <li className="nav-item px-3">
                 <a className="nav-link link" href="#">
                   Companies
                 </a>
               </li>
             </Link>
             <Link to="/alumni">
              <li className="nav-item px-3">
                 <a className="nav-link link" href="#">
                  Alumini
                 </a>
               </li>
             </Link>
             <Link to="#">
               <li className="nav-item px-3">
                 <a className="nav-link link" href="#">
                 About
                 </a>
               </li>
             </Link>
        
      </ul>
      <form class="d-flex">
            <div className="login">
           <Link to="/login">
             <button type="button" class="btn btn-dark login-btn">
               Login
             </button>
           </Link>
         </div>
         
        
      </form>
    </div>
  </div>
</nav>
  );
};

export default header;
