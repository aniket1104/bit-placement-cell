import Header from "../components/Header";
import { CreateUser } from '../services/api';
import React,{useState,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:8000';
const Create_Users=()=>{

    const navigate=useNavigate();
    const initialvalue  ={
       USN:'',
       password:''
    }
    const[update,setupdate]  = useState(initialvalue);
    
    const handlechange  = (e)=>{
        setupdate({...update,[e.target.name]:e.target.value});
        // console.log(update);
    }
    const saveupdate  = async()=>{
       await axios.post(`${url}/createuser`,
            update)//this form helps to parse into the data's json part
         .then(shre=>{
             console.log("hi",shre);
            if(shre.data.error){
                console.log("err",shre.data.error);
                 
             }
             else{
                console.log(shre.data.message);
                
             }
              
            
     }).catch(err=>{console.log(err)})
    }
  

    return(
  <div>
      <Header/>
      <input placeholder="USN" name="USN" onInput={(e)=>handlechange(e)} ></input>
      <input placeholder="password" name="password" type="password" onInput={(e)=>handlechange(e)}  ></input>
      <button type="button" onClick={()=>saveupdate()}>Create</button>
  </div>
    )
}

export default Create_Users;