import express from "express"
import { updateUser,deleteUser,getAllUsers,getUserById } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router =express.Router();


router.put("/:id", verifyUser,updateUser);

router.delete("/:id",verifyUser,deleteUser)

router.get("/:id",verifyUser, getUserById);

//only admin can get all user list
router.get("/",verifyAdmin,getAllUsers);



// token auth check
router.get("/token/verify/:id",verifyUser, (req,res,next)=>{
    res.send("You are authenticated !!")
} )

//admin verify check

router.get("/token/verifyadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("You are admin user")
})


export default router;