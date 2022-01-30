import React, { useContext } from "react";
import logo from "../../assets/img/bitlogo.png";
import "../../assets/css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Cookies from "universal-cookie";

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state, dispatch } = useContext(userContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const cookies = new Cookies();
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
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="items collapse navbar-collapse" id="navbarNav">
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
            <Link to="/admin/createuser">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  Create User
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="login">
          <Link to="/login">
            <button
              type="button"
              class="btn btn-dark login-btn"
              onClick={() => {
                cookies.remove("jwt", { secure: true });
                cookies.remove("admin", { secure: true });

                dispatch({ type: "CLEAR" });
                navigate("/");
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default header;
