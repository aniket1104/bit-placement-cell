import Post from '../schema/student-schema.js'
import User from '../schema/loginstudent-schema.js';
import Fac from '../schema/fac-schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../app.js';
import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import EMAIL from '../app.js';

const SENDGRID_API_KEY='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'

sgMail.setApiKey(SENDGRID_API_KEY);

export const Updatepost  = async(req,res)=>{
   
   try{
        //let data=await User.find({_id:req.user._id})
         let user=await User.findById(req.user._id);
         user.email=req.body.email;
         user.save()
       let data = await Post.findOneAndUpdate({detailsof:req.user._id},req.body);
       //console.log(data)
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
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id,email}=savedUser;
                    
               return res.json({token,user:{email,_id},message:'Successfully Logged In!'})
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
        if(req.user.isFac){
            res.status(404).json({error:"Page Not Found"})
        }
       let data = await Post.find({detailsof:req.user._id}).populate("detailsof","_id USN firstname surname monileno email branch class12marks class10marks averagecgpa linkresume linklinkedin linkgithublinkglassdoor clubsinvolved certifications projects others detailsof");
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
                  password:hashedpassword,
                  email:'-',
                  
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
                          detailsof:user._id,
                          branch:'-'
                      })
                      post.save()
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
export const CreateFac=async(req,res)=>{
    
    const{email,password}=req.body;
    if(!email || !password){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    // if(name.indexOf(' ')>=0){
    //    return res.json({error:"Please use hyphens instead of spaces"})
    // }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
       Fac.findOne({email:email})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this emailid already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const fac=new Fac({
                  password:hashedpassword,
                  firstname:"N/A",
                  surname:"N/A",
                   mobileno:"N/A",
                   email:email,
                   position:"N/A",
                   others:"N/A",
              })
              fac.save()
              .then(user=>{
                  console.log(user._id)
                  if(user){
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
export const Reset  =async(req,res)=>{
    const {USN}=req.body;
    console.log(req.body);
   crypto.randomBytes(32,(err,buffer)=>{
         if(err){
             return console.log(err)
         }
         console.log(USN)
         const token=buffer.toString("hex")//buffer is in the form of hexadecimal so we need to convert it in the string form
         User.findOne({USN:USN})
         .then(user=>{
             console.log(user)
             if(!user){
                 return res.json({error:"User does not exist"})
             }
             user.resetToken=token
             user.expireToken=Date.now()+3600000//time is in milisecond so as I want the link to be valid only for one hour so use hour in milliseconds
             user.save()
             .then(result=>{
                 if(result){
                   sgMail.send({
                            to: user.email, // Change to your recipient
                            from: 'shreyanushka02@gmail.com', // Change to your verified sender
                            subject: 'Password Reset',
                            text:"iyuyrtrsdf",
                             html: `<h3>Click on the following link to reset the password.</h3>
                                <h4>Remember the link will work for only 1 hour</h4>
                                <a href="${EMAIL}/reset-password/${token}">Reset Password</a>`,
                              })
                 }
                 return res.json({message:"Check Your Email for the Reset Link"})
             }).catch(err=>{
                 console.log(err)
             }) 
         }).catch(err=>{
             console.log(err)
         })
     })

}
export const ResetPass=async(req,res)=>{
    const {token,password}=req.body;
     bcrypt.hash(password,12)
     .then(hashedpassword=>{
              User.findOne({resetToken:token,expireToken:{$gt:Date.now()}})//$gt means greater than
              .then(result=>{
                  if(!result){
                      return res.json({error:"Session Expired! Try Again Later"})
                  }
                  result.password=hashedpassword
                  result.resetToken=undefined
                  result.expireToken=undefined
                  result.save()
                  .then(da=>
                     res.json({message:"Successfully Password Resetted!"})
                    )
                 
              }).catch(err=>console.log(err))
     })
}
export const Search=async(req,res)=>{
     let userPattern=new RegExp("^"+req.params.usn)//"^" this means all records 
     console.log(userPattern)
   Post.find({USN:{$regex:userPattern}})//$regex is the regular expression thing which will return all the records starting with the name written
   .select("USN firstname surname branch")
   .then(da=>{
       if(da){
           console.log(da)
         res.json(da)
    }
    else{
       res.json({error:"No User Found!"})
    }
   }).catch(err=>console.log(err))
}