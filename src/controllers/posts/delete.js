const postModel = require("../../model/postModel")



const deletePost=async (req,res)=>{
  try{
    const updatePost=await postModel.deleteOne({_id:req.body.postId})
    // console.log(updatePost.deletedCount)
    if(updatePost.deletedCount==0) return res.status(400).send({status:false,message:"no post found"})
    return res.status(200).send({stauts:true,message:"deleted Successfully"})
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={deletePost}