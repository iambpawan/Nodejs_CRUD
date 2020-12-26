//init
const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    createdOn:{
        type:Date,
        default:Date.now() 
    }
});
//user model
mongoose.model('users',userSchema);
//Export module
module.exports=mongoose.model('users');