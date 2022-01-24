import Home from "./core/Home";
import Login from "./core/Login";
import Reset from "./core/Reset";
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Alumni from "./core/Alumni";
import Student from "./core/student";
import Update_profile from "./core/Update_profile";
import Create_Users from "./core/Create_User";
import {reducer,initialState} from './Reducers/useReducers';
import Mission from "./core/Mission";
import Companies from "./core/Companies";
import Placement from "./core/Placement";
import About from "./core/About";
import Admin from "./core/admin/Admin";
import SearchStudent from "./core/admin/SearchStudent";
import StudentData from "./core/admin/StudentData";
import EligibleCandidates from "./core/admin/EligibleCandidates";


export const userContext=createContext();
function Routing() {
  const navigate=useNavigate();
const {state,dispatch}=useContext(userContext);
//console.log(userContext);

 const getCookie=(cname)=> {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
useEffect(()=>{
  
   const user=getCookie("user")
   console.log(user)
   if(user){
    dispatch({type:"USER",payload:user})
   }
   else{
     if(!window.location.pathname.startsWith('/reset')){
      navigate('/login')
     }
     
   }
  },[])


  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/student" element={<Student />} />
        <Route path="/update" element={<Update_profile />} />
        <Route path="/createuser" element={<Create_Users/>}/>
        <Route path="/reset" element={<Reset/>}/>
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
