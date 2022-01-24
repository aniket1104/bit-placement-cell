import Header from "../components/Header";
import React,{useState,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {userContext} from '../App';
import Cookies from 'universal-cookie';
import axios from "axios";

const url = 'http://localhost:8000';
const Login = () => {

  const {state,dispatch}=useContext(userContext);
    const initialvalue2  ={
       USN:'',
       password:''
    }
    const initialvalue1={
      email:'',
      password:''
    }
    const cookies=new Cookies();
    const[update2,setupdate2]  = useState(initialvalue2);
    const[update1,setupdate1]=useState(initialvalue1);
    const navigate=useNavigate();
    
    const handlechange1=(e)=>{
      setupdate1({...update1,[e.target.name]:e.target.value});
    }
    const handlechange2  = (e)=>{
        setupdate2({...update2,[e.target.name]:e.target.value});
        // console.log(update);
    }

    const saveupdate1  = async()=>{
      await axios({
        method:'post',
        url:`${url}/loginfaculty`,
        headers:{
          "Content-Type":"application/json"
        },
        data: update1
        
      }).then(
        shre=>{
          console.log(shre);
          if(shre.data.error){
                //return( M.toast({html:shre.data.error}))
                return window.alert(shre.data.error);
                 }
             else{
                 cookies.set("jwt",shre.data.token)
                 cookies.set("user",shre.data.user._id)//if u can't understand this then just cnsole log shre once and as user is an object so we need to stringify it
                 
                 dispatch({type:"USER",payload:shre.data.user}) 
                 
                 //return( M.toast({html:shre.data.message,classes:"#4caf50 green"})),
                 navigate(`/student`)
                 return window.alert(shre.data.message);
             }
        }
      )
              
    }
    const saveupdate2  = async()=>{
      await axios({
        method:'post',
        url:`${url}/loginstudent`,
        headers:{
          "Content-Type":"application/json"
        },
        data: update2
        
      }).then(
        shre=>{
          console.log(shre);
          if(shre.data.error){
                //return( M.toast({html:shre.data.error}))
                return window.alert(shre.data.error);
                 }
             else{
                 cookies.set("jwt",shre.data.token)
                 cookies.set("user",shre.data.user.USN)//if u can't understand this then just cnsole log shre once and as user is an object so we need to stringify it
                 dispatch({type:"USER",payload:shre.data.user.USN})
                 //return( M.toast({html:shre.data.message,classes:"#4caf50 green"})),
                 navigate(`/student`)
                 return window.alert(shre.data.message);
             }
        }
      )
              
    }
  

  return (
    
    <div><Header/>
    <br/>
    <div className="maincontainer">
        <div className="container-fluid">
            <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                     
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h1  style={{fontFamily: "Georgia, serif", fontSize:"50px"}} >Faculty Login</h1>
                                    <br/>
                                    <form>
                                        <div className="mb-3">
                                            <input  placeholder="registered email" required="" type='email' autofocus="" name="email" onInput={(e)=>handlechange1(e)}className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" name="password" onInput={(e)=>handlechange1(e)} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-check">
                                            <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                            <label for="customCheck1" className="form-check-label">Remember password</label>
                                        </div>
                                        <br/>
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="button" className="btn btn-primary btn-block text-uppercase mb-2 border-0 rounded-pill shadow-sm" style={{background:"black"}}  onClick={()=>saveupdate1()}>Login</button>
                                        </div>
                                        {/* <Link to="/reset" className="p"><h6>Forgot your password?</h6></Link> */}
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
              
                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                     
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h1  style={{fontFamily: "Georgia, serif", fontSize:"50px"}} >Student Login</h1>
                                    <br/>
                                    <form>
                                        <div className="mb-3">
                                            <input  placeholder="USN" required="" autofocus="" name="USN" onInput={(e)=>handlechange2(e)}className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" name="password" onInput={(e)=>handlechange2(e)} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-check">
                                            <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                            <label for="customCheck1" className="form-check-label">Remember password</label>
                                        </div>
                                        <br/>
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="button" className="btn btn-primary btn-block text-uppercase mb-2 border-0 rounded-pill shadow-sm" style={{background:"black"}}  onClick={()=>saveupdate2()}>Login</button>
                                        </div>
                                        {/* <Link to="/reset" className="p"><h6>Forgot your password?</h6></Link> */}
                                        
                                    </form>
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

export default Login;
