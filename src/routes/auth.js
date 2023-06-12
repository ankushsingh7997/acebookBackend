const express=require('express');
const { register } = require('../controllers/user/auth');
const router=express.Router();




router.post('/',register)



module.exports=router;