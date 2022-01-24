import Mongoose from "mongoose";

const facSchema= new Mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
})

const Fac=Mongoose.model('Fac',facSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default Fac;