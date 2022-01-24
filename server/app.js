import express from 'express';
const app=express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

let MONGOURI="mongodb+srv://harsh:harsh@cluster0.d7au8.mongodb.net/COLLEGEWEBSITE?retryWrites=true&w=majority";
  let  JWT_SECRET="gydgyugdauihiwjoi";
   let API_KEY="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";
    let EMAIL="http://localhost:8000"

if(process.env.NODE_ENV==="production"){
    MONGOURI=process.env.MOGOURI,
    JWT_SECRET=process.env.JWT_SEC,
    API_KEY=process.env.API_KEY,
    EMAIL=process.env.EMAIL


}
export default JWT_SECRET;
import'./schema/loginstudent-schema.js';// way of registering Schema Modles
import'./schema/student-schema.js';
import './schema/Fac-schema.js';
import './schema/loginfac-schema.js';
import ro from './routes/route.js';
app.use(ro);

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{//* means wildcard means all
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
mongoose.connect(MONGOURI,{useNewUrlParser:true, useUnifiedTopology:true})
{
    mongoose.connection.on('connected',()=>{
        console.log("Connected Successfully to mongo Yeah!");
    })
     mongoose.connection.on('error',(err)=>{
        console.log("Error Connecting",err);
    })
}
app.listen(process.env.PORT||8000,function(){
    console.log("Server connected to port 8000");
})