import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const registerUser= async (req,res)=>{
    try{
     const salt=bcrypt.genSaltSync(10);
     const hash=bcrypt.hashSync(req.body.password,salt)
        
     const newUser= new User({
        username:req.body.username,
        email: req.body.email,
        password:hash
     });

     await newUser.save();
     res.status(201).send("User Created !")

    }
    catch(e){
     res.status(500).send(e)
    }
}


export const login=async(req,res)=>{
  try{
    //check if user exists or not
   const user=await User.findOne({username:req.body.username});
   if(!user) 
    {
     return res.send({"message":"User not Found !"})
    }
    // check password ! compare with hashed password using bcrypt
   const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password);
   if(!isPasswordCorrect) 
    {
     return  res.send({"message":"Wrong Username Or Password ! Try Again"})
    }

   //sign with JWT web token

  const token= jwt.sign({id:user._id, isAdmin: user.isAdmin},process.env.JWT_TOKEN) 



   //if everything okay send user details 

   const {password,isAdmin,...otherInfos}=user._doc; //avoid sending password and isadmin , sending everything else
 
   res.cookie("access_token",token,{
    httpOnly:true
   })
   .status(200).send({...otherInfos});
  }catch(e){
   res.send(e)
  }

}