const express=require('express');
const { createPost } = require('../controllers/posts/create');

const router=express.Router();


router.post('/:id/',createPost)





module.exports=router;