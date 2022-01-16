import React from 'react'
import "../assets/css/student.css";
import { Link,useParams } from 'react-router-dom';
import Header from '../components/Header'
import { Viewstudent } from "../services/api.js";
import { useEffect,useState } from 'react';



const Student = () => {

const [post,setpost]  = useState({});
let { id } = useParams();

useEffect(()=>{
    const Fetchdata  = async()=>{

        console.log(id);
        console.log(post.linkgithub);
       let posts = await Viewstudent(id);
       console.log(posts);
       setpost(posts);
    }
    Fetchdata();
},[])

    return (
        <>

    <Header/>


<div className="container-fluid" id='student-body'>

<div className ="row">

    <div className ="col-xl-3">
      
      
  
      <div className="container  mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4 blackpro" id="profilecrd">
        <div className=" image d-flex flex-column justify-content-center align-items-center" id="imgprof"> <button className="btn btn-secondary" id='btnprofile'> <img id='profimage' src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span className="name mt-3">Eleanor Pena</span> <span className="idd">@eleanorpena</span>
              {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
              
              <Link to='/update'>
              <div className=" d-flex mt-2"> <button className="btn1 btn-light grow">Edit Profile</button> </div>
              </Link>              
              <div className="text mt-3"> <span id='spanpro'>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
              <div className="gap-5 mt-3 icons d-flex flex-row justify-content-center align-items-center "> 
                  <span className="lightic grow"><a href={post.github}><i className="fa fa-github fa-3x lightic"></i></a></span> 
                  <span className="lightic grow"><a href={post.linklinkedin}><i className="fa fa-linkedin fa-3x lightic"></i></a></span> 
                {/* <span className="lightic grow"><a href="https://twitter.com"><i className="fa fa-twitter fa-5x lightic"></i></a></span> */}
                  <span className="lightic grow"><a href={post.linklinkedin}><i className="fa fa-instagram fa-3x lightic"></i></a></span> 
                 <span className="lightic grow"><a href={post.linkresume}><i className="fa fa-file fa-3x lightic"></i></a></span>
                </div>
            

              
            </div>
          </div>
        </div>
        
      </div>


      <div className="col-xl-9">
        
        <div className="col-12" id="det">

        <div className="card ml-4" id="card1">
          <div className="card-header blackpro">
           <h1 >header</h1> 
          </div>
          
        </div>
        </div>

        <div className="col-12 mt-0" id="det1">

        <div className="card ml-4" id="card2">
        <div className="card-body greypro">
            <div className="row greypro">
                  <div className="col-6" id="prodetails"><span>NAME</span> kumar hasrh</div>
                  <div className="col-6" id="prodetails">name  shddjkksd</div>
                  <div className="col-6" id="prodetails">name Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat itaque dolorum consequuntur, ut, tempore esse eaque, obcaecati eligendi est quae laboriosam! Quaerat earum iusto, ea nostrum itaque corporis voluptates possimus autem impedit dicta a!</div>
                  <div className="col-6" id="prodetails">name Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dolore, quae repudiandae, temporibus recusandae quod fuga aut laboriosam voluptatem consequatur quo necessitatibus soluta!</div>
                  <div className="col-6" id="prodetails">name Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorem.</div>
            </div>
          </div>
          
        </div>
        </div>



<div className="col-12 mt-3">
     
<div className="container  mt-1 mb-1">
 <div className="row">


     

     <div className="col-md-4 mt-3">
         <div className="card p-3 mb-2 greypro">
             <div className="d-flex justify-content-between">
                 <div className="d-flex flex-row align-items-center">
                     <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                     <div className="ms-2 c-details">
                         {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div className="badge"> <span>Design</span> </div>
             </div>
             <div className="mt-5">
                 <h3 className="heading">Software Architect <br/>Java - USA</h3>
                 <div className="mt-5">
                     
                     <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>


     <div className="col-md-4 mt-3 ">
         <div className="card p-3 mb-2 greypro">
             <div className="d-flex justify-content-between">
                 <div className="d-flex flex-row align-items-center">
                     <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                     <div className="ms-2 c-details">
                         {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div className="badge"> <span>Design</span> </div>
             </div>
             <div className="mt-5">
                 <h3 className="heading">Software Architect <br/>Java - USA</h3>
                 <div className="mt-5">
                     
                     <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>


     <div className="col-md-4 mt-3">
         <div className="card p-3 mb-2 greypro">
             <div className="d-flex justify-content-between">
                 <div className="d-flex flex-row align-items-center">
                     <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                     <div className="ms-2 c-details">
                         {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div className="badge"> <span>Design</span> </div>
             </div>
             <div className="mt-5">
                 <h3 className="heading">Software Architect <br/>Java - USA</h3>
                 <div className="mt-5">
                     
                     <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>





     <div className="col-md-4 mt-3">
         <div className="card p-3 mb-2 greypro">
             <div className="d-flex justify-content-between">
                 <div className="d-flex flex-row align-items-center">
                     <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                     <div className="ms-2 c-details">
                         {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div className="badge"> <span>Design</span> </div>
             </div>
             <div className="mt-5">
                 <h3 className="heading">Software Architect <br/>Java - USA</h3>
                 <div className="mt-5">
                     
                     <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>





     <div className="col-md-4 mt-3">
         <div className="card p-3 mb-2 greypro">
             <div className="d-flex justify-content-between">
                 <div className="d-flex flex-row align-items-center">
                     <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                     <div className="ms-2 c-details">
                         {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div className="badge"> <span>Design</span> </div>
             </div>
             <div className="mt-5">
                 <h3 className="heading">Software Architect <br/>Java - USA</h3>
                 <div className="mt-5">
                     
                     <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>





     <div className="col-md-4 mt-3 ">
         <div className="card p-3 mb-2 greypro">
             <div className="d-flex justify-content-between">
                 <div className="d-flex flex-row align-items-center">
                     <div className="icon"> <i className="bx bxl-reddit"></i> </div>
                     <div className="ms-2 c-details">
                         {/* <h6 className="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div className="badge"> <span>Design</span> </div>
             </div>
             <div className="mt-5">
                 <h3 className="heading">Software Architect <br/>Java - USA</h3>
                 <div className="mt-5">
                     
                     <div className="mt-3"> <span className="text1">52 Applied <span className="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>








 </div>
</div>


</div>



      </div>
      


        </div>



      </div>



        </>
    )
}

export default Student;
