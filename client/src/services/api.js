import axios from 'axios';

//import {useNavigate} from'react-router-dom';

const url = 'http://localhost:8000';






export const studentquery = async (info)=>{
  console.log(info);
  console.log(info.nofbacks);
     try{
      let response = await axios.get(`${url}/admin/eligiblecandidate`, {
        params: {
          marks10th:info.marks10th,
          marks12th:info.marks12th,
          averagecgpa:info.averagecgpa,
          // totaloffers:info.totaloffers,
          nofbacks:info.nofbacks,
          ctcoffered:info.ctcoffered,
          educationalgap:info.educationalgap,
          totaloffers:1,
        },
      });
      return response.data;
     }catch(error){
         console.log("error while getting data",error);
     }
}

export const Viewstudent = async (jwt)=>{
     try{
        let res  = await axios({
        url:`${url}/student`,
        headers:{
          "Authorization":"Bearer "+jwt
        }
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