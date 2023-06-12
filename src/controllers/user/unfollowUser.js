const userModel = require("../../model/userModel")

const unFollow=async (req,res)=>{

   try{
    
    //------------------------------

    const user=await userModel.findById(req.params.id)
    
  
    const currentUser=await userModel.findById(req.body.userId)
  
    
    if(user.followers.includes(req.body.userId))
    {
        await user.updateOne({$pull:{followers:req.body.userId}})
        await currentUser.updateOne({$pull:{followings:req.params.id}})
        return res.status(200).send({status:true,message:"unFollowed"})
    }
    else
    {
        return res.status(400).send({status:false,message:"not following"})
    }


    //------------------------------

       
      }
      catch(err)
      {
          return res.status(500).send({status:false,message:err.message})
      }

}

module.exports={unFollow}