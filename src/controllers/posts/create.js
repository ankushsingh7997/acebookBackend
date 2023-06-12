const postModel = require("../../model/postModel")



const createPost=async (req,res)=>{
   const newPost=new postModel(req.body)
  try{
    const savePost=await newPost.save()
    return res.status(200).send({stauts:true,data:savePost})
  }
  catch(error)
  {
    return res.status(400).send({stauts:false,message:error})
  }


}
module.exports={createPost}