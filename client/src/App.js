import Home from "./core/Home";
import Login from "./core/Login";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Alumni from "./core/Alumni";
import Student from "./core/student";
import React,{useContext,createContext} from 'react';

export const userContext=createContext();

function App() {
 // const history=useNavigate();
//const {state,dispatch}=useContext(userContext)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/Student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
