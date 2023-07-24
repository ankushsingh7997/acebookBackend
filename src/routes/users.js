const express=require('express');
const { login } = require('../controllers/user/loggin');
const { userUpdate } = require('../controllers/user/updateuser');
const { deleteUser } = require('../controllers/user/deleteUser');
const { follow } = require('../controllers/user/followUser');
const { unFollow } = require('../controllers/user/unfollowUser');
const { getUser } = require('../controllers/user/getUser');
const { getFriends } = require('../controllers/user/getFriends');
const router=express.Router();




router.post('/',login)
router.post('/:id',userUpdate)
router.post('/:id',deleteUser)
router.post('/:id/follow',follow)
router.post('/:id/unfollow',unFollow)
router.get('/',getUser)
// get friends
router.get('/friends/:id',getFriends)




module.exports=router;