import Home from "./core/Home";
import Login from "./core/Login";
import Reset from "./core/Reset";
import ResetPass from "./core/ResetPassword";
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Alumni from "./core/Alumni";
import Student from "./core/student/student";
import StudentPlacement from "./core/student/StudentPlacement";
import UpdateProfile from "./core/student/UpdateProfile";
import CreateUser from "./core/admin/CreateUser";
import {reducer,initialState} from './Reducers/useReducers';
import Mission from "./core/Mission";
import Companies from "./core/Companies";
import Placement from "./core/Placement";
import About from "./core/About";
import Admin from "./core/admin/Admin";
import SearchStudent from "./core/admin/SearchStudent";
import StudentData from "./core/admin/StudentData";
import EligibleCandidates from "./core/admin/EligibleCandidates";
import Cookies from "universal-cookie";
//import cors from 'cors';


export const userContext=createContext();
function Routing() {
  const navigate=useNavigate();
const {state,dispatch}=useContext(userContext);
const cookies=new Cookies();
//console.log(userContext);

useEffect(()=>{
  //console.log(state)
   const user=cookies.get("user")
   const admin=cookies.get("admin")
   if(user){
    dispatch({type:"USER",payload:user})
    }
   else if(admin){
     dispatch({type:"ADMIN",payload:admin})
   }
   
   else{
     if(!window.location.pathname.startsWith('/reset')){
      navigate('/login')
     }
     
   }
  },[])


  return (
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/placement" element={<StudentPlacement />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/admin/createuser" element={<CreateUser/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/reset-password/:token" element={<ResetPass/>}/>
        <Route path="/mission" element={<Mission />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/searchstudent" element={<SearchStudent />} />
        <Route path="/admin/studentdata" element={<StudentData />} />
        <Route path="/admin/eligiblecandidates" element={<EligibleCandidates />} />
      </Routes>
    
  );
}


function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <userContext.Provider value={{state:state,dispatch:dispatch}}>
    <Router>
    <Routing/>
    </Router>
    </userContext.Provider>
    );
}

export default App;
