import React from "react";
import AdminHeader from "./AdminHeader";
import "../../assets/css/admin.css"
import { Bar } from 'react-chartjs-2';
import {Chart as Chartjs,BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import  { useState, useContext ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Viewadmin } from "../../services/api";
import { dangertoast, successtoast } from "../Toasts";
import Cookies from "universal-cookie";


const url = "http://localhost:8000";
Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement
)




ChartJS.register(ArcElement,Tooltip);




const PieChart = () => {
  
 


  var data = {
    labels: [ 'purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Pie
        data={data}
        height={300}
        options={options}

      />
    </div>
  )
}


const a=100;

// const { height, width } = useWindowDimensions();
// if(width<900){
//    a = 200;
  
// }
// else{
//   a =100;
// }

const BarGraph = ()=>{

  var data= {
    labels: ['CSE', 'ISE', 'ECE', 'ETE', 'EEE', 'EIE','MECH', 'CIVIL'],
    datasets: [{
        label: 'No of students placed',
        data: [400, 190, 30, 50, 20, 300,44,45],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}


var options=  {
  // maintainAspectRatio:false,
  scales: {
      y: {
          beginAtZero: true
      }
  },legends:{
    fontsize:40
  }
}


  return(
    <div>

    <Bar
            data={data}
            // height={100}
            // width={300}
            // options={options}
     />
</div>

  )
}







const Admin = () => {
  


  const cookies=new Cookies();

  const [post, setpost] = useState({});

  useEffect(() => {

    
    if(typeof cookies.get("admins")==="undefined"){
       return navigate('/student')
    }
    const Fetchdata = async () => {
      let posts = await Viewadmin();
      console.log(posts[0]);
      setpost(posts[0]);
    };
    Fetchdata();
  }, []);

  const navigate = useNavigate();
  const initialvalue = {
    USN: "",
    password: "",
  };

  const initialcomp={
    companyname:"",
    job:"",
    ctc:0,
    date:Date.now()
  }

  const initialplac={
    USN:"",
    companyname:"",
    job:"",
    currentctc:0,
    message:""
  }

  const [placed,setplaced]=useState(initialplac);
  const [update, setupdate] = useState(initialvalue);
  const [comp,setcomp]=useState(initialcomp);

  const handlechange = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
    // console.log(update);
  };
  const handle=(e)=>{
    setcomp({...comp,[e.target.name]:e.target.value});
  }

  const handler=(e)=>{
    setplaced({...placed,[e.target.name]:e.target.value});
  }
  const saveupdate = async () => {
    await axios
      .post(`${url}/createuser`, update) //this form helps to parse into the data's json part
      .then((shre) => {
        console.log("hi", shre);
        if (shre.data.error) {
          console.log("err", shre.data.error);
          dangertoast(shre.data.error);
        } else {
          console.log(shre.data.message);
          successtoast(shre.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    };
    
    const add=async()=>{
      //console.log(comp)
      await axios.post(`${url}/createcompany`,comp)
      .then((shre)=>{
        if(shre.data.message){
          // window.alert(shre.data.message);
          successtoast(shre.data.message);
        }
        else{
          // window.alert(shre.data.error);
          console.log(shre.err)
          dangertoast(shre.data.error);
          
          // successtoast(shre.data.message);
        }
      }).catch(err=>{
        console.log(err)
      })
    } 
    
    const plac=async()=>{
      //console.log(placed)
      await axios.post(`${url}/plac`,placed)
      .then((shre)=>{
        if(shre.data.message){
          // window.alert(shre.data.message);
          successtoast(shre.data.message);
        }
        else{
          // window.alert(shre.data.eror);
          dangertoast(shre.data.error);
          console.log(shre.err)
        }
      }).catch(err=>{
       console.log(err)
      })
    }

    const remove=async()=>{
      await axios.post(`${url}/removecompany`,comp)
      .then((shre)=>{
        if(shre.data.message){
          // window.alert(shre.data.message);
          successtoast(shre.data.message);
        }
        else{
          // window.alert(shre.data.error);
          dangertoast(shre.data.error);
          console.log(shre.err)
        }
      }).catch(err=>{
        console.log(err)
      })
    } 

  return (
    <div>
      {/* <BarGraph/> */}
      <AdminHeader />
      


      <div class="admin_body"></div>
 
<div className="row">


  <div className="col-xl-3">
            <div className="container  mt-2 mb-4 p-3 d-flex justify-content-center">
              <div className="card p-4 blackpro" id="profilecrd">
                <div
                  className=" image d-flex flex-column justify-content-center align-items-center"
                  id="imgprof"
                >
                  {" "}
                  <button className="btn btn-secondary" id="btnprofile">
                    {" "}
                    <img
                   className=" rounded-circle " 
                      id="profimage"
                      src= "https://i.imgur.com/wvxPV9S.png"
                      height="100"
                      width="100"
                    />
                  </button>{" "}
                  <span className="name mt-3">
                    <span>{post.firstname} </span> <span>{post.surname}</span>
                  </span>{" "}
                  <span className="idd">{post.email}</span>
                  {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
                  <div className=" d-flex mt-2">
                    {" "}
                    <button
                      className="btn1 btn-light grow"
                      // onClick={() => {
                      //   navigate(`/update`);
                      // }}
                    >
                      Edit Profile
                    </button>{" "}
                  </div>
                  <div className="text mt-3">
                    {" "}
                    <span id="spanpro">
                      Eleanor Pena is a creator of minimalistic x bold graphics
                      and digital artwork.
                      <br />
                      <br /> Artist/ Creative Director by Day #NFT minting@ with
                      FND night.{" "}
                    </span>{" "}
                  </div>
                  <div className="gap-5 mt-3 icons d-flex flex-row justify-content-center align-items-center ">
                    <span className="lightic grow">
                      {/* <a href={post.linkgithub}> */}
                        <i className="fa fa-github fa-3x lightic"></i>
                      {/* </a> */}
                    </span>
                    <span className="lightic grow">
                      {/* <a href={post.linklinkedin}> */}
                        <i className="fa fa-linkedin fa-3x lightic"></i>
                      {/* </a> */}
                    </span>
                
                    <span className="lightic grow">
                      {/* <a href={post.linkinstagram}> */}
                        <i className="fa fa-instagram fa-3x lightic"></i>
                      {/* </a> */}
                    </span>
                    <span className="lightic grow">
                      {/* <a href={post.linkresume}> */}
                        <i className="fa fa-file fa-3x lightic"></i>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

    
 

  <div className="col-xl-9">



 <div class="container mt-2 mb-4 p-3 py-3">
     
 
     <div id="graph1div1_ad" class="p-5 pt-2 mb-4 bg-dark rounded-3">
       <div id="graph1_ad" class="container-fluid py-5">
       <h4 id="graph1head_ad"
              className="d-flex pb-2 justify-content-center fw-normal"
              style={{ fontSize: "2rem", color:"white" }}
            >
              Branch Wise Placement
            </h4>
       {/* <PieChart/> */}
       <BarGraph/>

         {/* <h1 class="display-5 fw-bold">Custom jumbotron</h1>
         <p class="col-md-8 fs-4"></p>
         <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
       </div>
     </div>
 
     <div class="row align-items-md-stretch mb-4 mt-2">
       <div class="col-md-6" id="graph2_admin">
         <div id="graph2_con_admin" class="h-100 p-5 pt-3 pb-1 text-white bg-dark rounded-3">
         <h4
              className="d-flex pb-3 justify-content-center fw-normal"
              style={{ fontSize: "2rem", color:"white" }}
            >
              Overall Placement
            </h4>
           <PieChart/>
           
         </div>
       </div>

       {/* here */}
       <div class="col-md-6">
         <div class="h-100  bg-dark border rounded-3">
           
         
         
          <div className="p-5 row">
            <h3
              className="d-flex mt-4 mb-5 justify-content-center fw-normal"
              style={{ fontSize: "3rem", color:"white" }}
            >
              Create User
            </h3>
            <div className=" mb-3 col-xl-12">
              <input
                placeholder="USN"
                name="USN"
                className="form-control rounded-2 mx-0
                mb-4"
                
                onInput={(e) => handlechange(e)}
              ></input>
              <input
                placeholder="Password"
                name="password"
                type="password"
                className="form-control rounded-2 my-3"
                
                onInput={(e) => handlechange(e)}
              ></input>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light rounded-2"
                onClick={() => saveupdate()}
              >
                Create
              </button>
            </div>
            <h6 className="fw-light fs-6 text-center my-3">
              User created successfully.
            </h6>
          </div>
        





         </div>
       </div>
     </div>


     <div class="row align-items-md-stretch mb-4">
       <div class="col-xl-12">
         <div class="h-100 p-5 text-white bg-dark rounded-3">
         <div class="row bg-dark">
         <h3
              className="d-flex justify-content-center fw-normal"
              style={{ fontSize: "3rem", color:"white" }}
            >
              Add Company
            </h3>
         <div class="col-12 bg-dark">
             <div id="ec_card" class="card  bg-dark">
                 <div class="card-body bg-dark">
                     <div class="row search-body bg-dark">
                         <div class="col-lg-12 bg-dark">
                           <div class="row">
                             
                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" 
                             
                             >
                               <div class="fw-bold px-1">Company Name</div>
                               <input class="form-control" type="string" name="companyname"  onInput={(e)=>handle(e)}  ></input>
                             </div>
                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" 
                             style={{margin:"0% auto"}}
                             >
                               <div class="fw-bold px-1">Job Role</div>
                               <input class="form-control" name="job"  type="string" onInput={(e)=>handle(e)}  />
                             </div>
                           </div>
                           <div class="row">

                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" >
                               <div class="fw-bold px-1">CTC/Stipend</div>
                               <input class="form-control" name="ctc"  type="number" onInput={(e)=>handle(e)}  />
                             </div>
                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" style={{margin:"0% auto"}}>
                               <div class="fw-bold px-1">Date</div>
                               <input class="form-control" name="date"  type="date" onInput={(e)=>handle(e)}  />
                             </div>
                           </div>
                           


                           {/* <div class="text-center py-2"> */}

                           
                               {/* <button onClick={()=>{saveinfo()}} type="button" class="btn btn-outline-dark rounded-0 text-center "
                               style={{margin:'auto'}}
                               > Submit
                               </button> */}
                             
                             
                           {/* </div> */}
                           
                         </div>
                         
                     </div>
                     
                 </div>
             </div>
         </div>
     </div>

                           <div class="text-center py-2">

           <button class="btn btn-outline-light" type="button" onClick={()=>add()} >ADD COMPANY</button>
           
           <button class="btn btn-outline-light" type="button" onClick={()=>remove()}>REMOVE COMPANY</button>
                           </div>
          
                        
         </div>
       </div>
       </div>

     
     <div class="row align-items-md-stretch mb-4">
       <div class="col-xl-12">
         <div class="h-100 p-5 text-white bg-dark rounded-3">
         <div class="row bg-dark">
         <h3
              className="d-flex justify-content-center fw-normal"
              style={{ fontSize: "3rem", color:"white" }}
            >
              Update Placement
            </h3>
         <div class="col-12 bg-dark">
             <div id="ec_card" class="card  bg-dark">
                 <div class="card-body bg-dark">
                     <div class="row search-body bg-dark">
                         <div class="col-lg-12 bg-dark">
                           <div class="row">
                             
                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" 
                             
                             >
                               <div class="fw-bold px-1">USN</div>
                               <input class="form-control" type="string" name="USN"  onInput={(e)=>handler(e)}  ></input>
                             </div>
                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" 
                             style={{margin:"0% auto"}}
                             >
                               <div class="fw-bold px-1">Company Name</div>
                               <input class="form-control" name="companyname"  type="string" onInput={(e)=>handler(e)}  />
                             </div>
                           </div>
                           <div class="row">

                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" >
                               <div class="fw-bold px-1">Role Job</div>
                               <input class="form-control" name="job"  type="string" onInput={(e)=>handler(e)}  />
                             </div>
                             <div class="col-lg-6 col-md-6 col-sm-12 py-2" style={{margin:"0% auto"}}>
                               <div class="fw-bold px-1">CTC</div>
                               <input class="form-control" name="currentctc"  type="number" onInput={(e)=>handler(e)}  />
                             </div>
                           </div>
                           <div class="row">

                             <div class="col-lg-12 col-md-12 col-sm-12 py-2" >
                               <div class="fw-bold px-1">Message</div>
                               {/* <input class="form-control" name="job"  type="string" onInput={(e)=>handler(e)}  /> */}
                               <textarea onInput ={(e)=>handler(e)} className="form-control up_textarea" name='message' placeholder=" details" ></textarea>
                             </div>
                             
                           </div>
                           
                

                           {/* <div class="text-center py-2"> */}

                           
                               {/* <button onClick={()=>{saveinfo()}} type="button" class="btn btn-outline-dark rounded-0 text-center "
                               style={{margin:'auto'}}
                               > Submit
                               </button> */}
                             
                             
                           {/* </div> */}
                           
                         </div>
                         
                     </div>
                     
                 </div>
             </div>
         </div>
     </div>

                           <div class="text-center py-2">

           {/* <button class="btn btn-outline-light" type="button" onClick={()=>add()} >ADD COMPANY</button> */}
           
           <button class="btn btn-outline-light" type="button" onClick={()=>plac()}>UPDATE</button>
                           </div>
          
                        
         </div>
       </div>
       </div>



 
     
   </div>

           </div>


      
         </div>
    </div>
  );
};

export default Admin;