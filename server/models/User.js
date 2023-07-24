import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique: true
  },

  email:{
    type:String,
    required:true,
    unique: true
  },
  
  isAdmin:{
    type: Boolean,
    default:false,

  },

  password:{
     type:String,
     required: true
  },

  
}, {timestamps:true})


export default mongoose.model("User",UserSchema)