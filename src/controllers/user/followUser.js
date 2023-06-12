const userModel = require("../../model/userModel")

const follow=async (req,res)=>{

   try{
    
    //------------------------------

    const user=await userModel.findById(req.params.id)
  
    const currentUser=await userModel.findById(req.body.userId)
    console.log(currentUser)
    if(!user.followers.includes(req.body.userId))
    {
        await user.updateOne({$push:{followers:req.body.userId}})
        await currentUser.updateOne({$push:{followings:req.params.id}})
        return res.status(200).send({status:true,message:"user has been followed"})
    }
    else
    {
        return res.status(400).send({status:false,message:"already following"})
    }


    //------------------------------

       
      }
      catch(err)
      {
          return res.status(500).send({status:false,message:err.message})
      }

}

module.exports={follow}