const postModel = require("../../model/postModel")



const likePost=async (req,res)=>{
  try{
    const updatePost=await postModel.findOne({_id:req.body.postId,userId:req.body.userId})
    if(!updatePost.likes.includes(req.params.id))
    {
        await updatePost.updateOne({$push:{likes:req.params.id}})
        return res.status(200).send({stauts:true,message:"liked Successfull"})
    }
    else{
        await updatePost.updateOne({$pull:{likes:req.params.id}})
        return res.status(200).send({stauts:true,message:"dislike Successfull"})
    }
    
    
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={likePost}