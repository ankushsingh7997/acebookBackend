const userModel = require("../../model/userModel")

const getFriends=async(req,res)=>{
try{
    console.log('here')
  const user=await userModel.findById(req.params.id)
  if(!user) return res.status(400).send({status:false,message:'no user found'})
  const friends=await Promise.all(
    user.followings.map((friendId)=>{
        return userModel.findById(friendId)
    })
  )
  let friendList=[]
  friends.map((friend)=>{
  const{_id,username,profilePicture}=friend;
  friendList.push({_id,username,profilePicture})
  })
  console.log(friendList)
  return res.status(200).json(friendList)
}
catch(err)
{
    return res.status(500).send({status:false , message:err.message})
}
}
module.exports={getFriends}