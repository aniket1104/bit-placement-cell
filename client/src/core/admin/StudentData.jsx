import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";

const StudentData = () => {
 


  

  const intitialvalue  ={
    branch:''
  }
  const[data,setdata] = useState(intitialvalue);
  const[post,setpost]  = useState([]);


  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    // console.log(update);
  };

  const saveupdate =async()=>{

    console.log(data);
    
      
          
             await axios.get(`http://localhost:8000/admin/studentdata`, {
              params: {
                branch:data.branch,
                
              },
            })
            .then(res=>{
              if(res.error){
                console.log(res.data.error);
              }
              else{
                console.log(res.data);

                setpost(res.data);
                // if(post.length===0){
                //   // console.log("hello");
                //   // notify();
                // }
              }
            })
            .catch(err=>{
              console.log(err);
            })






  }










  return (
    <div>
      <AdminHeader />


      <div className="container">
        <div className="container-fluid d-flex justify-content-center py-5">
          <div className="byBranch px-5">
            <h3 className="py-1 fw-normal">Search by Branch</h3>
          </div>
          <div class="dropdown px-5">
            {/* <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Branch
            </button> */}
            {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  CSE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ISE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ECE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ETE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  EEE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  CIV
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MEC
                </a>
              </li>
            </ul> */}
                    {/* <label htmlFor="branch_" className="labels UP_labels"><button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Branch
            </button></label> */}


                    <select
                    id  ="branch_"
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="branch"
                      className="form-control"
                      placeholder="select branch"
                    >
                      <option value="CSE">CSE</option>
                      <option value="ISE">ISE</option>
                      <option value="AI">AI</option>
                      <option value="ECE">ECE</option>
                      <option value="CIV">CIV</option>
                      <option value="EEE">EEE</option>
                      <option value="TLE">TLE</option>
                    </select>


              

                    <button
              className="btn btn-outline-dark rounded-0"
              style={{ boxShadow: "none" }}
              onClick={() => {
                saveupdate();
              }}
            >
              submit
            </button>

          </div>
        </div>
      </div>




      {/* <SearchByBranch /> */}
      {/* <Table /> */}


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

            {
                post.map((info,index)=>{
                      console.log(info);
                  return(

                  
                  <tr>
                  <th scope="row">{++index}</th>
                <td>
                  <a href="#">{info.USN}</a>
                </td>
                <td><div> <p class="type  text-uppercase">{info.firstname} {info.surname}</p> </div></td>
                <td>{info.branch}</td>
                    
               

                  </tr>
                )       
                })
            }


          </tbody>
        </table>
      </div>







    </div>
  );
};

export default StudentData;
