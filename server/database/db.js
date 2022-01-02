import mongoose from 'mongoose'

const Connection  = async ()=>{
    const URL = 'mongodb+srv://harsh:harsh@cluster0.d7au8.mongodb.net/COLLEGEWEBSITE?retryWrites=true&w=majority'
    try{

        await mongoose.connect(URL,{useNewUrlParser : true ,useUnifiedTopology:true});
        console.log("database connected");

    }catch(error){
        console.log("error while connecting",error);
    }
}
export default Connection;