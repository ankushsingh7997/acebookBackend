const postModel = require("../../model/postModel")



const getPost=async (req,res)=>{
  try{
    const post=await postModel.findOne({_id:req.body.postId})
    return res.status(200).send({stauts:true,data:post})
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={getPost}