const { uploadImage } = require("../../cloudinary/cloudinary");
const postModel = require("../../model/postModel");
const { isValidImage } = require("../../utils/validations/validations");



const createPost=async (req,res)=>{

const{userId,desc}=req.body 


let object={userId:userId}
if(desc) object.desc=desc
   
  try{
    

    if (req.file) 
    {
      

      if(!isValidImage(req.file.originalname))
      {
        return res.status(400).send({status: false,message:"Image format is Invalid please provide .jpg or .png or .jpeg format",});
      }
      else
      {
        let uploadImageUrl=await uploadImage(req.file);
        object.img=uploadImageUrl;
        
      }

    }
    

    const newPost=new postModel(object)
   
    const savePost=await newPost.save()
    return res.status(200).send({stauts:true,data:savePost})
  }
  catch(error)
  {
    return res.status(500).send({stauts:false,message:error})
  }


}
module.exports={createPost}