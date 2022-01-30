import express from 'express';
const app=express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import path from 'path'




let MONGOURI="mongodb+srv://harsh:harsh@cluster0.d7au8.mongodb.net/COLLEGEWEBSITE?retryWrites=true&w=majority";
  let  JWT_SECRET="gydgyugdauihiwjoi";
   //let API_KEY="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";
    let EMAIL="http://localhost:8000"

if(process.env.NODE_ENV==="production"){
    MONGOURI=process.env.MOGOURI,
    JWT_SECRET=process.env.JWT_SEC,
   // API_KEY=process.env.API_KEY,
    EMAIL=process.env.EMAIL}

    


const origin="http://localhost:3000";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({credentials:true,origin}));
app.use(cookieParser());


export default JWT_SECRET;
import'./schema/loginstudent-schema.js';// way of registering Schema Modles
import'./schema/student-schema.js';
import './schema/fac-schema.js';
import ro from './routes/route.js';

const __dirname=path.resolve();;
// console.log(path.dirname(__filename));
app.use(ro);
app.use("/images", express.static(path.join(__dirname, "/images")));
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


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images");
    // cb(null, path.resolve(__dirname+'/images'));
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
app.post("/update/upload", upload.single("file"), (req, res) => {
    console.log(req.body.name);
  res.status(200).json("File has been uploaded");
});












app.listen(process.env.PORT||8000,function(){
    console.log("Server connected to port 8000");
})



// app.get('/getcookie', function (req, res) {
//     res.send(req.cookies);
// })