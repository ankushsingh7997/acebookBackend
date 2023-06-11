const express=require('express');
const router=express.Router();




router.get('/',(req,res)=>{
    return res.status(200).send({status:true,message:"this is user api"})
})



module.exports=router;