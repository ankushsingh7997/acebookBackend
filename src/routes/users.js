const express=require('express');
const { login } = require('../controllers/user/loggin');
const { userUpdate } = require('../controllers/user/updateuser');
const { deleteUser } = require('../controllers/user/deleteUser');
const { follow } = require('../controllers/user/followUser');
const router=express.Router();




router.post('/',login)
router.post('/:id',userUpdate)
router.post('/:id',deleteUser)
router.post('/:id/follow',follow)




module.exports=router;