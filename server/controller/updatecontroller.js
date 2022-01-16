import Post from '../schema/student-schema.js'

export const Updatepost  = async(req,res)=>{
    console.log(req.body);
    try{
        const post  = await new Post(req.body);
        post.save();
        res.status(200).json('update sucessful');
    }catch(error){
        res.status(500).json(error);
    }
    
}