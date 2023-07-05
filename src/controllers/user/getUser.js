const userModel = require("../../model/userModel")
const { checkFormat, passwordVal } = require("../../utils/validations/validations")

// get a user
const getUser=async (req,res)=>{
try{
  const userId=req.query.userId;
  const username=req.query.username;
   

  const userData=userId ? await userModel.findOne({_id:userId,isDeleted:false}): await userModel.findOne({username:username,isDeleted:false})
  const{password,updatedAt,...other}=userData._doc

  if(!userData) return res.status(400).send({status:false,message:"no user found"})
  return res.status(200).send({status:true,message:"user found",data:other})
}
catch(err)
{
  console.log(err)
    return res.status(500).send({status:false,message:err.message})
}

}
module.exports={getUser}