const user=require('../../model/userModel');
const bcrypt = require("bcrypt");

const register=async(req,res)=>{
    try{
        const{username,password,email}=req.body;

        const hashPassword =  await bcrypt.hash(password, password.length);
        let obj={
            username:username,password:hashPassword,email:email
        }

    const registeruser=await user.create(obj)
    return res.status(200).send({status:true,data:registeruser})
    }
    catch(err)
    {
  return res.status(500).send({status:false,message:err.message})
    }











}
module.exports={register}