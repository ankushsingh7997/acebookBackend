let jwt=require('jsonwebtoken')

function jwttoken(id,username,email)
{
  try{
    
    const token = jwt.sign(
        { userId:id.toString(), emailId:email },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: process.env.JWT_ACCESS_EXPIRE  }
      );
     
      return token
  }
  catch(error)
    {
        
       return res.status(500).send({status:false,message:error.message})
    }

}
module.exports={jwttoken}