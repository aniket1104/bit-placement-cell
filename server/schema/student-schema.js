import Mongoose  from "mongoose";
const {ObjectId}=Mongoose.Schema.Types;

const studentschema = Mongoose.Schema({
      USN:{
          type:String,
          required:true,
          unique:true
      },
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
      branch:{
          type:String,
          required:true,
      },
      email:{
          type:String,
          required:true,
      },
      class12marks:{
          type:String,
          required:true
      },
      class10marks:{
          type:String,
          required:true
      },
      averagecgpa:{
          type:String,
          required:true
      },
      firstname:{
          type:String,
          required:true
      },
      linkresume:{
          type:String,
          required:true,
        //   unique:true
        },
        linklinkedin:{
            type:String,
            required:true,
            // unique:true
        },
        linkgithub:{
            type:String,
            required:true,
            // unique:true
        },
        linkglassdoor:{
            type:String,
            required:true,
            // unique:true
      },
      clubsinvolved:{
          type:String,
          required:true
      },
      certifications:{
          type:String,
          required:true
      },
      projects:{
          type:String,
          required:true
      },
      others:{
          type:String
          
      },
      detailsof:{
          type:ObjectId,//used to maintain the relationship
          ref:'User'
      }

})
const Post =Mongoose.model('Post',studentschema);

export default Post;