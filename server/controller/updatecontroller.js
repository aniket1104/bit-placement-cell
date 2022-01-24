import Post from '../schema/student-schema.js'
import User from '../schema/loginstudent-schema.js';
import Fac from '../schema/loginfac-schema.js';
import PostFac from '../schema/Fac-schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../app.js';
export const Updatepost  = async(req,res)=>{
   
   try{
        //let data=await User.find({_id:req.user._id})
       let data = await Post.findOneAndUpdate({detailsof:req.user._id},req.body);
       console.log(data)
       res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
    
     
    
    }

export const LoginStudent  = async(req,res)=>{

    console.log(req.body);
    const{USN,password}=req.body;
    if(!USN || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    //const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    // if(!re.test(emailid)){
    //     return res.json({error:'invalid email id'})
    // }
    User.findOne({USN:USN})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id,name,email}=savedUser;
                Post.findOne({USN:USN})
                .then(po=>{
                    
               return res.json({token,user:{name,email,USN},po,message:'Successfully Logged In!'})})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}

export const LoginFac  = async(req,res)=>{

    console.log(req.body);
    const{email,password}=req.body;
    if(!email || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
    Fac.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.PostFac.findOne({email:email})
                .then(po=>{sign({_id:savedUser._id},JWT_SECRET);
                const{_id,name,email}=savedUser;
                
                    
               return res.json({token,user:{name,email},po,message:'Successfully Logged In!'})})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}
export const Viewstudent = async(req,res)=>{
    try{
        //let data=await User.find({_id:req.user._id})
       let data = await Post.find({detailsof:req.user._id}).populate("detailsof","_id USN firstname surname monileno email class12marks class10marks averagecgpa linkresume linklinkedin linkgithublinkglassdoor clubsinvolved certifications projects others detailsof");
       console.log(data)
       res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
}

export const CreateUser=async(req,res)=>{
    
    const{USN,password}=req.body;
    if(!USN || !password){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    // if(name.indexOf(' ')>=0){
    //    return res.json({error:"Please use hyphens instead of spaces"})
    // }
    //const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    // if(!re.test(email)){
    //     return res.json({error:'invalid email id'})
    // }
       User.findOne({USN:USN})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this usn already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user=new User({
                  USN:USN,
                  password:hashedpassword
              })
              user.save()
              .then(user=>{
                  console.log(user._id)
                  if(user){
                      
                      const post=new Post({
                          USN:user.USN,
                          firstname:'-',
                          surname:'-',
                          mobileno:'-',
                          email:'-',
                          class12marks:'-',
                          class10marks:'-',
                          averagecgpa:'-',
                          linkresume:'-',
                          linklinkedin:'-',
                          linkgithub:'-',
                          linkglassdoor:'-',
                          clubsinvolved:'-',
                          certifications:'-',
                          projects:'-',
                          others:'-',
                          detailsof:user._id
                      })
                      post.save();
                      res.json({message:"Successfully Signed Up!"})
                  }
                  else{
                      return res.json({error:"Try Again Later!"})
                  }
              }).catch((err)=>{
                  console.log(err);
              })})
              
          
      }).catch((err)=>{
          console.log(err);
      })
    
}
export const Reset=async(req,res)=>{

}