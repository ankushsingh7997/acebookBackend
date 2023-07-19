
const bcrypt = require("bcrypt");
const { jwttoken } = require("../../utils/jwttoken/jwttoken");
const userModel=require('../../model/userModel')
const { checkFormat, isValidEmail } = require("../../utils/validations/validations");


// login--------------------------------------------------------------------------------
const login = async  (req, res)=> {
  try {
    let { email, password } = req.body;

    email=checkFormat(email)
    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "please check your email" })
        email=email.toLowerCase();
    if (!isValidEmail(email))
      return res.status(400).send({ status: false, message: "Invalid email" });


      password=checkFormat(password)
      if (!password)
        return res
          .status(400)
          .send({ status: false, message: "please check your password" })

    let userData = await userModel.findOne({ email: email, isDeleted: false });
    if (!userData)
      return res
        .status(404)
        .send({ status: false, message: "no user found with this email" });
    else {
        const comparePassword=bcrypt.compareSync(password,userData.password)
      if (!comparePassword)
        return res
          .status(400)
          .send({ status: false, message: "incorrect password" });
    }

    

    // token creation
    const token = jwttoken(userData._id,userData.email)
    // res.setHeader("x-api-key", tokenObject.token); 
    

    // res.cookie('refreshToken',`${tokenObject.refreshToken}`,{maxAge:86400*7000,httpOnly:true})
   
   const data={
    "x-api-key":token
   
      };
      
    return res.status(200).send({ status: true, message: "User login successfull", userData });
  }
   catch (error) 
   {

    return res.status(500).send({ status: false, message: error.message });

  }
  
};


module.exports = { login };
