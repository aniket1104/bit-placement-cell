import axios from 'axios';

const url = 'http://localhost:8000';

export const updateprofile = async(update)=>{
    console.log(update);
    try{
        return await axios.post(`${url}/update`,update);
    }catch(error){
        console.log("error while updating",error);
    }
}

export const Viewstudent = async (id)=>{
     try{
        let res  = await axios.get(`${url}/student/${id}`)
        return res.data;
     }catch(error){
         console.log("error while getting data",error);
     }
}