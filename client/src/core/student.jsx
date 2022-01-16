import React from 'react'
import "../assets/css/student.css";
import { Link } from 'react-router-dom';
import Header from '../components/Header'
const Student = () => {
    return (
        <>

    <Header/>


<div class="container-fluid" id='student-body'>

<div class ="row">

    <div class ="col-xl-3">
      
      
  
      <div class="container  mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4 blackpro" id="profilecrd">
        <div class=" image d-flex flex-column justify-content-center align-items-center" id="imgprof"> <button class="btn btn-secondary" id='btnprofile'> <img id='profimage' src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span class="name mt-3">Eleanor Pena</span> <span class="idd">@eleanorpena</span>
              {/* <div class="d-flex flex-row justify-content-center align-items-center gap-2"> <span class="idd1">Oxc4c16a645_b21a</span> <span><i class="fa fa-copy"></i></span> </div> */}
              
              <Link to='/update'>
              <div class=" d-flex mt-2"> <button class="btn1 btn-light grow">Edit Profile</button> </div>
              </Link>              
              <div class="text mt-3"> <span id='spanpro'>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div>
              <div class="gap-5 mt-3 icons d-flex flex-row justify-content-center align-items-center "> 
                <span class="lightic grow"><a href="https://twitter.com"><i class="fa fa-twitter fa-5x lightic"></i></a></span>
                 <span class="lightic grow"><a href="https://facebook.com"><i class="fa fa-facebook-f fa-3x lightic"></i></a></span>
                  <span class="lightic grow"><a href="https://instagram.com"><i class="fa fa-instagram fa-3x lightic"></i></a></span> 
                  <span class="lightic grow"><a href="https://twitter.com"><i class="fa fa-linkedin fa-3x lightic"></i></a></span> 
                  <span class="lightic grow"><a href="https://twitter.com"><i class="fa fa-github fa-3x lightic"></i></a></span> 
                </div>
            

              
            </div>
          </div>
        </div>
        
      </div>


      <div class="col-xl-9">
        
        <div class="col-12" id="det">

        <div class="card ml-4" id="card1">
          <div class="card-header blackpro">
           <h1 >header</h1> 
          </div>
          
        </div>
        </div>

        <div class="col-12 mt-0" id="det1">

        <div class="card ml-4" id="card2">
        <div class="card-body greypro">
            <div class="row greypro">
                  <div class="col-6" id="prodetails">name kumar hasrh</div>
                  <div class="col-6" id="prodetails">name  shddjkksd</div>
                  <div class="col-6" id="prodetails">name Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat itaque dolorum consequuntur, ut, tempore esse eaque, obcaecati eligendi est quae laboriosam! Quaerat earum iusto, ea nostrum itaque corporis voluptates possimus autem impedit dicta a!</div>
                  <div class="col-6" id="prodetails">name Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dolore, quae repudiandae, temporibus recusandae quod fuga aut laboriosam voluptatem consequatur quo necessitatibus soluta!</div>
                  <div class="col-6" id="prodetails">name Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorem.</div>
            </div>
          </div>
          
        </div>
        </div>



<div class="col-12 mt-3">
     
<div class="container  mt-1 mb-1">
 <div class="row">


     

     <div class="col-md-4 mt-3">
         <div class="card p-3 mb-2 greypro">
             <div class="d-flex justify-content-between">
                 <div class="d-flex flex-row align-items-center">
                     <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                     <div class="ms-2 c-details">
                         {/* <h6 class="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div class="badge"> <span>Design</span> </div>
             </div>
             <div class="mt-5">
                 <h3 class="heading">Software Architect <br/>Java - USA</h3>
                 <div class="mt-5">
                     
                     <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>


     <div class="col-md-4 mt-3 ">
         <div class="card p-3 mb-2 greypro">
             <div class="d-flex justify-content-between">
                 <div class="d-flex flex-row align-items-center">
                     <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                     <div class="ms-2 c-details">
                         {/* <h6 class="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div class="badge"> <span>Design</span> </div>
             </div>
             <div class="mt-5">
                 <h3 class="heading">Software Architect <br/>Java - USA</h3>
                 <div class="mt-5">
                     
                     <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>


     <div class="col-md-4 mt-3">
         <div class="card p-3 mb-2 greypro">
             <div class="d-flex justify-content-between">
                 <div class="d-flex flex-row align-items-center">
                     <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                     <div class="ms-2 c-details">
                         {/* <h6 class="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div class="badge"> <span>Design</span> </div>
             </div>
             <div class="mt-5">
                 <h3 class="heading">Software Architect <br/>Java - USA</h3>
                 <div class="mt-5">
                     
                     <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>





     <div class="col-md-4 mt-3">
         <div class="card p-3 mb-2 greypro">
             <div class="d-flex justify-content-between">
                 <div class="d-flex flex-row align-items-center">
                     <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                     <div class="ms-2 c-details">
                         {/* <h6 class="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div class="badge"> <span>Design</span> </div>
             </div>
             <div class="mt-5">
                 <h3 class="heading">Software Architect <br/>Java - USA</h3>
                 <div class="mt-5">
                     
                     <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>





     <div class="col-md-4 mt-3">
         <div class="card p-3 mb-2 greypro">
             <div class="d-flex justify-content-between">
                 <div class="d-flex flex-row align-items-center">
                     <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                     <div class="ms-2 c-details">
                         {/* <h6 class="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div class="badge"> <span>Design</span> </div>
             </div>
             <div class="mt-5">
                 <h3 class="heading">Software Architect <br/>Java - USA</h3>
                 <div class="mt-5">
                     
                     <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
                 </div>
             </div>
         </div>
     </div>





     <div class="col-md-4 mt-3 ">
         <div class="card p-3 mb-2 greypro">
             <div class="d-flex justify-content-between">
                 <div class="d-flex flex-row align-items-center">
                     <div class="icon"> <i class="bx bxl-reddit"></i> </div>
                     <div class="ms-2 c-details">
                         {/* <h6 class="mb-0">Reddit</h6> <span>2 days ago</span> */}
                     </div>
                 </div>
                 <div class="badge"> <span>Design</span> </div>
             </div>
             <div class="mt-5">
                 <h3 class="heading">Software Architect <br/>Java - USA</h3>
                 <div class="mt-5">
                     
                     <div class="mt-3"> <span class="text1">52 Applied <span class="text2">of 100 capacity</span></span> </div>
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
