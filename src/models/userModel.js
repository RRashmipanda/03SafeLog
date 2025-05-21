import mongoose from "mongoose";


const userSchema=new mongoose.Schema({

    username: {
       type:String,
       required: [true,"please provide a username"],
       unique: true,
    },
    email: {
       type:String,
       required: [true,"please provide a email"],
       unique: true,
    },
    password:{
        type:String,
        required:[true,"Please provide password"],
    },
    isVerified:{
      type:Boolean,
      default:false,
    },
    isAdmin:{
      type:Boolean,
      default:false,
    },
    forgotPaswordToken: String,
    forgotPaswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,


})


const User = mongoose.models.User|| mongoose.model("User",userSchema);

export default User;
