import  Express  from "express";
import Connection from "./database/db.js";
import Router from './routes/route.js'
import cors from "cors";
import bodyParser from "body-parser";

const app = Express();
app.use(cors());
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({extended :true}));
app.use('/',Router);

console.log("hello");
const PORT  = 8000;
app.listen(PORT,console.log("server running"));

Connection();