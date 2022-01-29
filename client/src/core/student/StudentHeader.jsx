import React,{useContext} from "react";
import logo from "../../assets/img/bitlogo.png";
import "../../assets/css/Header.css";
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import {userContext} from '../../App';
import Cookies from "universal-cookie";

const url = 'http://localhost:8000';
const StudentHeader = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state, dispatch } = useContext(userContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate= useNavigate();
  const cookies=new Cookies();
  const Logout=async()=>{

  await axios({
        method:'post',
        url:`${url}/logout`,
       withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
        
        
      }).then(
        shre=>{
          console.log(shre);
          if(shre.data.error){
                //return( M.toast({html:shre.data.error}))
                return window.alert(shre.data.error);
                 }
             else{
                 dispatch({type:"CLEAR"}) ;
                 cookies.remove("user",{secure:true})
                 //return( M.toast({html:shre.data.message,classes:"#4caf50 green"})),
                  window.alert(shre.data.message);
                  navigate('/login')
             }
        }
      )
}
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
            <Link to="/student">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  My Profile
                </a>
              </li>
            </Link>
            <Link to="/student/placement">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  My Placement
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="login">
          
            <button type="button" class="btn btn-dark login-btn" onClick={()=>Logout()}>
              Logout
            </button>
          
        </div>
      </nav>
    </div>
  );
};

export default StudentHeader;
