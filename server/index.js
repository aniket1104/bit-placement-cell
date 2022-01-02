import  Express  from "express";
import Connection from "./database/db.js";



const app = Express();
console.log("hello");
const PORT  = 8000;
app.listen(PORT,console.log("server running"));

Connection();