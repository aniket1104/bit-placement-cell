import React from "react";
import AdminHeader from "./AdminHeader";
import { useState,useEffect } from "react";
import { studentquery } from "../../services/api";
import axios from "axios";


const EligibleCandidates = () => {

  const initialvalue  ={
    marks10th:0,
    marks12th:0,
    averagecgpa:0,
    totaloffers:0,
    nofbacks:0,
    ctcoffered:0,
    educationalgap:0
    

  }

  const[info,setinfo]  = useState(initialvalue);
  const handlechange  = (e)=>{

    const { name, value } = e.target;
    // setinfo({...info,[e.target.name]:e.target.value});
    setinfo({ ...info, [name]: parseInt(value, 10) });
    // console.log(info);
    // console.log(update);
}

const[post,setpost]  = useState([]);

let data;
// const savedata  = ()=>{
//   setpost(data);
// //   setpost(post=>[...post,data]);
//  console.log(post);
// }
const saveinfo  = async()=>{
  // setpost([...post, await studentquery(info)]);
  // console.log(post);
 

  
      
         await axios.get(`http://localhost:8000/admin/eligiblecandidate`, {
          params: {
            marks10th:info.marks10th,
            marks12th:info.marks12th,
            averagecgpa:info.averagecgpa,
            // totaloffers:info.totaloffers,
            nofbacks:info.nofbacks,
            ctcoffered:info.ctcoffered,
            educationalgap:info.educationalgap,
            totaloffers:1,
          },
        })
        .then(res=>{
          if(res.error){
            console.log(res.data.error);
          }
          else{
            console.log(res.data);
            setpost(res.data);
          }
        })
        .catch(err=>{
          console.log(err);
        })
        
      
 





}





  const Table = () => {
    return (
      <div className="container-fluid d-flex justify-content-center py-5">
        <table class="table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">USN</th>
              <th scope="col">NAME</th>
              <th scope="col">BRANCH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="#">1BI20IS014</a>
              </td>
              <td>Aniket</td>
              <td>ISE</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  };

  

  return (
    
    <>
    
      <AdminHeader />
      {/* <EligibleCandidates /> */}
      

      <div className="container">
        <div className="container-fluid">
          <div className="container-fluid py-3">
            <h4>Eligibility Criteria</h4>
            <div className="criteria d-flex">
              <div className="input-group mb-3">
                <span class="input-group-text">10th Percentage or Marks</span>
                <input type="number" name="marks10th"   onChange ={(e)=>handlechange(e)} ></input>
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">12th Percentage or Marks</span>
                <input name="marks12th" onChange ={(e)=>handlechange(e)} type="number" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">UG/PG Percentage or Marks</span>
                <input name="averagecgpa" onChange ={(e)=>handlechange(e)} type="number" />
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="criteria d-flex">
              <div className="input-group mb-3">
                <span class="input-group-text">Number of Backs</span>
                <input name="nofbacks" onChange ={(e)=>handlechange(e)} type="number" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">Education Gap</span>
                <input name="educationalgap" onChange ={(e)=>handlechange(e)} type="number" />
              </div>
            </div>
          </div>
          <div className="container-fluid py-3">
            <h4>Company Details</h4>
            <div className="criteria d-flex">
              <div className="input-group mb-3">
                <span class="input-group-text">Company Name</span>
                <input type="text" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">CTC Offered</span>
                <input name="ctcoffered" onChange ={(e)=>handlechange(e)} type="number" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button onClick={()=>{saveinfo()}} type="button" className="btn btn-outline-dark rounded-0">
              Submit
            </button>
          </div>
        </div>
      </div>



{/* 
      { post.map((d)=>{
        console.log(d);
      <Table />
      })} */}

        {post.map((item,index)=>{
         return (
           <tr>
         <th scope="row">{++index}</th>
            <td>
              <a href="#">{item.USN}</a>
            </td>
            <td>{item.firstname} {item.surname}</td>
            <td>{item.branch}</td>
            </tr>)
          })}







    </>
     
     );
};

export default EligibleCandidates;
