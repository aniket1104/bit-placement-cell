import React from "react";
import logo from "../assets/img/bitlogo.png";

const header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="d-flex logo">
          <img src={logo} alt="logo" width="60" />
          <div className="clgName">
            <h3>BIT, Bangalore</h3>
          </div>
        </div>
        <div className="items">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="login">
          <button>
            <a href="#">Login</a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default header;
