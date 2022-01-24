import Mongoose  from "mongoose";
const {ObjectId}=Mongoose.Schema.Types;

const facschema = Mongoose.Schema({
      firstname:{
          type:String,
          required:true
      },
      surname:{
          type:String,
          required:true
      },
      mobileno:{
          type:String,
          required:true
      },
      email:{
          type:String,
          required:true,
          unique:true,
      },
      position:{
          type:String,
          required:true,
      },
      others:{
          type:String
          
      },
      detailsof:{
          type:ObjectId,//used to maintain the relationship
          ref:'Fac'
      }

})
const PostFac =Mongoose.model('postFac',facschema);

export default PostFac;