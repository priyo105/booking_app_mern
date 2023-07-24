import express from "express"
const router =express.Router();
import Hotel from "../models/Hotel.js"
import { createHotel ,updateHotel, deleteHotel ,getHotelById, getAllHotels} from "../controllers/hotels.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


//CREATE

router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);

//DELETE

router.delete("/:id", verifyAdmin,deleteHotel)


//GET

router.get("/:id",verifyUser, getHotelById);

//GET ALL

router.get("/", verifyUser, getAllHotels);



//test route
// router.get("/",(req,res)=>{
// res.send("this is hotel route")
// })

export default router;