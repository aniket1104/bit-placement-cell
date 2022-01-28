import axios from 'axios';

//import {useNavigate} from'react-router-dom';

const url = 'http://localhost:8000';

axios.defaults.withCredentials=true;





export const Viewstudent = async (jwt,state,usn)=>{

     try{
        let res  = await axios({
          method:"get",
        url:`${url}/student`,
        headers:{
          "Authorization":"Bearer "+jwt
        },
        params:{
        type:state,
        usn:usn
        },
          withCredentials:true
        
      })
        return res.data;
     }catch(error){
         console.log("error while getting data",error);
     }
}


export const CreateUser=async(update)=>{
    
}

// export const Reset=async(email)=>{

    
//     axios.post("/reset",
//                  email
//          ) 
//          .then(shre=>{
//              console.log(shre);
//             //   ( M.toast({html:shre.message,classes:"#4caf50 green"}))
//             //    navigate("/login")
//      }).catch(err=>{console.log(err)})

// } 