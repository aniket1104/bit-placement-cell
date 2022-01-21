import React from "react";
import logo from "../../assets/img/bitlogo.png";
import "../../assets/css/Header.css";
import { Link } from "react-router-dom";

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
          <ul className="navbar-nav">
            <Link to="/admin/searchstudent">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Search Student
                </a>
              </li>
            </Link>
            <Link to="/admin/studentdata">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Student Data
                </a>
              </li>
            </Link>
            <Link to="/admin/eligiblecandidates">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  Eligible Candidates
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="login">
          <Link to="/login">
            <button type="button" class="btn btn-dark login-btn">
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default header;
