import React from "react";
import logo from "../assets/img/bitlogo.png";
import "../assets/css/Header.css";

const header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between header">
        <div className="d-flex logo">
          <img src={logo} alt="logo" width="60" />
          <div className="clgName">
            <h3>Bangalore</h3>
            <h3>Institute of</h3>
            <h3>Technology</h3>
          </div>
        </div>
        <div className="items">
          <ul class="navbar-nav">
            <li class="nav-item px-3">
              <a class="nav-link link" aria-current="page" href="#">
                Mission
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link link" href="#">
                Placement
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link link" href="#">
                Companies
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link link" href="#">
                Alumini
              </a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="login">
          <button type="button" class="btn btn-dark login-btn">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default header;
