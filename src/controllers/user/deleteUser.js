const userModel = require("../../model/userModel")
const { checkFormat, passwordVal } = require("../../utils/validations/validations")


const deleteUser=async (req,res)=>{
try{
    

  const update=await userModel.updateOne({_id:req.params.id,isDeleted:false},{isDeleted:true},{new:true})

  if(!update) return res.status(400).send({status:false,message:"no user found"})
  return res.status(201).send({status:true,message:"deleted successfully"})
}
catch(err)
{
    return res.status(500).send({status:false,message:err.message})
}

}
module.exports={deleteUser}