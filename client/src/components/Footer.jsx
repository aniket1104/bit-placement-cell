import React from "react";


const Footer = () => {
  return (
    
    <div className="  container-fluid bg-light  ">
{/* <li className="ms-3 mx-3"><a className="link-dark" href="#"><i className="fas fa-address-card"></i></a></li> */}
    <footer className="py-5 ">
      <div className="row">
        <div className="col-6">
          <h5 className="font-weight-bold px-5">CONTACT US</h5>
          <ul className="nav flex-column px-5">

           <p className="col-4"> BANGALORE INSTITUTE OF TECHNOLOGY
          K.R. ROAD, V V PURA,
          BENGALURU-560004
          INDIA</p>
          </ul>
        </div>
  
        
  
        <div className="col-4 offset-1  mr-1" >
            <h5>Subscribe to our newsletter</h5>
          {/* <form> */}
            {/* <p>Monthly digest of whats new and exciting from us.</p>
            <div className="d-flex w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
              <button className="btn btn-primary" type="button">Subscribe</button> */}
            {/* </div> */}
          {/* </form> */}
        <ul className="list-unstyled d-flex">
          <li className="ms-3 mx-3 list-unstyled"><a className="link-dark" href="mailto:principalbit4@gmail.com"><i className="fa fa-envelope fa-3x" aria-hidden="true" ></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark text-decoration-none" href="mailto:principalbit4@gmail.com"><p className="font-weight-bold my-2">principalbit4@gmail.com</p></a></li>
        </ul>
        </div>
      </div>
      {/* justify-content-between */}
      <div className="d-flex justify-content-center pt-4 pb-0 ml-10 border-top">
        
        <ul className="list-unstyled d-flex mr-11">
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i className="fa fa-github fa-2x" aria-hidden="true" ></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
          <li className="ms-3 mx-3"><a className="link-dark" href="#"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div className="d-flex justify-content-center  ">
        <p className="px-4 ">© 2021 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
    
  </div>
     
  
  ); 
   
} 
 
export default Footer;
