const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:4,
        max:20,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:
    {
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:
    {
        type:String,
        max:50
    },
    relationship:
    {
        type:Number,
        enum:[1,2,3]
    },
    isDeleted:
    {
        type:Boolean,
        default:false
    }
    
}
, {timestamps:true})

module.exports=mongoose.model("user",userSchema)