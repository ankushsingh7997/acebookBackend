const postModel = require("../../model/postModel")
const userModel = require("../../model/userModel")



const getUserPost=async (req,res)=>{
  try{

    const user=await userModel.findOne({username:req.params.username})
    const post=await postModel.find({userId:user._id})
   
    return res.status(200).send({stauts:true,posts:post})
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={getUserPost}