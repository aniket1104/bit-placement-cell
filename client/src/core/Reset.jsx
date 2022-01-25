import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
//import '../App.css';

const url = 'http://localhost:8000';
const Reset =()=>{
    
     const [USN,setUSN]=useState("");
    const navigate=useNavigate();
      
      const PostData=async()=>{
          console.log(USN);
         try{
        let res  = await axios({
            method:"post",
        url:`${url}/resets`,
        headers:{
          "Content-type":"application/json"
        },
        data:{"USN":USN}
      })
        console.log(res);
        navigate('/login')
     }catch(error){
         console.log("error while getting data",error);
     }
    }


     return(
    
        <div className="mycard">
            <div className="card card-sign">
                <h2 className="brand-logo color">Enter Your USN</h2>
                <input  placeholder="USN"  onInput={(e)=>setUSN(e.target.value)}/>
                <button className="btn waves-effect waves-light" onClick={()=>PostData()}>Enter
                </button>
        
            </div>
        </div>
    )
}

export default Reset;
