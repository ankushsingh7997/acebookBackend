const express=require('express');
const { createPost } = require('../controllers/posts/create');
const { updatePost } = require('../controllers/posts/update');
const { deletePost } = require('../controllers/posts/delete');
const { likePost } = require('../controllers/posts/like');
const { getPost } = require('../controllers/posts/get');
const { getTimelinePost } = require('../controllers/posts/getTimelinePosts');
const { getUserPost } = require('../controllers/posts/getUserPost');
const upload=require('../multer/multer')

const router=express.Router();


router.post('/:id/',upload.single('image'),createPost)
router.put('/:id/',updatePost)
router.delete('/:id/',deletePost)
router.put('/:id/like',likePost)
router.get('/:id/get',getPost)
router.get('/:id/gettimeline',getTimelinePost)
// to get user all posts
router.get('/profile/:username',getUserPost)





module.exports=router;