import User from "../models/User.js";



//UPDATE
export const updateUser= async (req,res)=>{
    try{  
        const updatedUser=await User.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {$new:true}
        );
        res.status(200).json(updatedUser)
 
    }catch(e){
     res.status(500).json(e)
    }
       
}

//Delete
export const deleteUser= async (req,res)=>{
    try{
        const deletedUser= await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Has been Deleted");
    }catch (err){
        res.status(500).json(err);
    }
}

//getById
export const getUserById=async(req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err){
        res.status(500).json(err)
    }
}


//getAll
export const getAllUsers= async (req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
       }catch(err){
        res.status(500).json(err);
       }      

}