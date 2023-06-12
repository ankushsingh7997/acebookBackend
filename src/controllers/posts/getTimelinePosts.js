const postModel = require("../../model/postModel")
const userModel = require("../../model/userModel")



const getTimelinePost=async (req,res)=>{
  try{
    const currentUser=await userModel.findById(req.params.id)
    const userPosts=await postModel.find({userId:currentUser._id})
    const friendPosts=await Promise.all(
        currentUser.followings.map((friendId)=>{
            return postModel.find({userId:friendId})
        })
    )
    
         return res.status(200).send({stauts:true,posts:userPosts.concat(...friendPosts)})
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={getTimelinePost}