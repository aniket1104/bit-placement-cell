import React from "react";
import logo from "../assets/img/bitlogo.png";

const Footer = () => {
  return (
    
    <div class="  container-fluid bg-light  ">
    <footer class="py-5 ">
      <div class="row">
        <div class="col-6">
          <h5 class="font-weight-bold px-5">CONTACT US</h5>
          <ul class="nav flex-column px-5">
            {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li> */}
           <p className="col-4"> BANGALORE INSTITUTE OF TECHNOLOGY
          K.R. ROAD, V V PURA,
          BENGALURU-560004
          INDIA</p>
          </ul>
        </div>
  
        
  
        <div class="col-4 offset-1  mr-1" >
            <h5>Subscribe to our newsletter</h5>
          {/* <form> */}
            {/* <p>Monthly digest of whats new and exciting from us.</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button class="btn btn-primary" type="button">Subscribe</button> */}
            {/* </div> */}
          {/* </form> */}
        <ul class="list-unstyled d-flex">
          <li className="ms-3 mx-3 list-unstyled"><a className="link-dark" href="mailto:principalbit4@gmail.com"><i class="fa fa-envelope fa-3x" aria-hidden="true" ></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark text-decoration-none" href="mailto:principalbit4@gmail.com"><p className="font-weight-bold my-2">principalbit4@gmail.com</p></a></li>
        </ul>
        </div>
      </div>
      {/* justify-content-between */}
      <div class="d-flex justify-content-center pt-4 pb-0 ml-10 border-top">
        
        <ul class="list-unstyled d-flex mr-11">
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i class="fa fa-github fa-2x" aria-hidden="true" ></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div class="d-flex justify-content-center  ">
        <p className="px-4 ">© 2021 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
     
  
  ); 
   
} 
 
export default Footer;
