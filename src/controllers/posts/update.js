const postModel = require("../../model/postModel")



const updatePost=async (req,res)=>{
  try{
    const updatePost=await postModel.findOneAndUpdate({userId:req.params.id},{$set:req.body},{new:true})
    return res.status(200).send({stauts:true,data:updatePost})
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={updatePost}