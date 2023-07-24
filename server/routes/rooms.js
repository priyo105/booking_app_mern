import express from "express"
import { createRoom, deleteRoom, getRoomById, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router =express.Router();

router.get("/",(req,res)=>{
res.send("this is rooms route")
})



router.post("/:hotelid",verifyAdmin, createRoom);
router.get("/:id",verifyUser, getRoomById);
router.put(":/id",verifyUser, updateRoom);
router.delete("/:id/:hotelid",verifyUser,deleteRoom);


export default router;