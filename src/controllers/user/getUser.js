const userModel = require("../../model/userModel")
const { checkFormat, passwordVal } = require("../../utils/validations/validations")


const deleteUser=async (req,res)=>{
try{
    

  const userData=await userModel.findOne({_id:req.params.id,isDeleted:false})
  const{password,updatedAt,...other}=userData._doc

  if(!userData) return res.status(400).send({status:false,message:"no user found"})
  return res.status(201).send({status:true,message:"user found",data:other})
}
catch(err)
{
    return res.status(500).send({status:false,message:err.message})
}

}
module.exports={deleteUser}