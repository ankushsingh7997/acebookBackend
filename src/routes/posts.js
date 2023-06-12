const express=require('express');
const { createPost } = require('../controllers/posts/create');
const { updatePost } = require('../controllers/posts/update');
const { deletePost } = require('../controllers/posts/delete');
const { likePost } = require('../controllers/posts/like');
const { getPost } = require('../controllers/posts/get');
const { getTimelinePost } = require('../controllers/posts/getTimelinePosts');

const router=express.Router();


router.post('/:id/',createPost)
router.put('/:id/',updatePost)
router.delete('/:id/',deletePost)
router.put('/:id/like',likePost)
router.get('/:id/get',getPost)
router.get('/:id/gettimeline',getTimelinePost)





module.exports=router;