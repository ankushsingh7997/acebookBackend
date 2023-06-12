const userModel = require("../../model/userModel")
const { checkFormat, passwordVal } = require("../../utils/validations/validations")


const userUpdate=async (req,res)=>{
try{
    console.log("here")
    let{password}=req.body
    let user={}
  if(password)
  {
       password=checkFormat(password)
       if (!password)return res.status(400).send({ status: false, message: "please check your password" })
       if (!passwordVal(password))
       return res
       .status(400)
       .send({ status: false, message: "pass valid password" });

       req.body.password =  await bcrypt.hash(password, password.length);


  }

  
  const update=await userModel.updateOne({_id:req.params.id},{$set:req.body},{new:true})
  return res.status(201).send({status:true,message:"updated successfully",data:update})
}
catch(err)
{
    return res.status(500).send({status:false,message:err.message})
}

}
module.exports={userUpdate}