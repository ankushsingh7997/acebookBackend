const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({

    
        userId: {
          type: String,
          ref:user,
          required: true,
        },
        desc: {
          type: String,
          max: 500,
        },
        img: {
          type: String,
        },
        likes: {
          type: Array,
          default: [],
        },
  
    
}
, {timestamps:true})

module.exports=mongoose.model("post",postSchema)