import React,{useState} from "react";
import AdminHeader from "./AdminHeader";
import axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from "universal-cookie";

const url = 'http://localhost:8000';
const Search = () => {

 const[search,setSearch]=useState("")
 const [list,setList]=useState([])

 const cookies=new Cookies();

     const Searches=async(srch)=>{
         setSearch(srch)
         await axios({
           method:"get",
           url:`${url}/search/${srch}`,
             headers:{
                 "Content-Type":"application/json",
                 "Authorization":"Bearer "+localStorage.getItem('jwt')
             },
         }) //this form helps to parse into the data's json part
         .then(shre=>{
            if(shre.data.error){
                return window.alert(shre.data.error);
                 
             }
             else{
               console.log(shre.data)
                setList(shre.data)
             }
              
            
     }).catch(err=>{console.log(err)})
    }
  



  return (
    <div className="container">
      <div className="container-fluid">
        <div className="position-absolute top-50 start-50 translate-middle">
          <h3
            className="d-flex justify-content-center"
            style={{ fontSize: "3.4rem" }}
          >
            Search
          </h3>
          <div className="d-flex">
            <input
              type="text"
              className="form-control rounded-0"
              style={{ width: "500px" }}  placeholder="Enter USN"  value={search} onChange={(e)=>{Searches(e.target.value)}}
            />
            <button
              className="btn btn-outline-dark rounded-0"
              style={{ boxShadow: "none" }} onClick={()=>{setList([])}}
            >
              <i class="far fa-search fs-2"></i>
            </button>
          </div>
          <div style={{ paddingTop: "20px" }}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">USN</th>
            <th scope="col">NAME</th>
            <th scope="col">BRANCH</th>
          </tr>
        </thead>
        <tbody>
        
          {list.map((item,index)=>{
         return (
           <tr>
         <th scope="row">{++index}</th>
            <td>
              <Link to="/student" onClick={()=>{cookies.set("usn",item.USN,{secure:true})}}>{item.USN}</Link>
            </td>
            <td>{item.firstname} {item.surname}</td>
            <td>{item.branch}</td>
            </tr>)
          })}
          
            
        </tbody>
      </table>
    </div>
        </div>
      </div>
    </div>
  );
        };

const SearchStudent = () => {
 
  return (
    <div>
      <AdminHeader />
      <Search />
    </div>
  );
};

export default SearchStudent;