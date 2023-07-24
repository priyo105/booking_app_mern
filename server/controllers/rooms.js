import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"

export const createRoom=async (req,res,next)=>{

    const hotelId= req.params.hotelid;
    const newRoom=new Room(req.body);

    try{
    
    const savedRoom= await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms :savedRoom._id}}) //pushing into the Hotel model rooms array , the id of the newly created room.
    res.status(200).json(200);

    }catch(err){
        res.status(401).send(err)
    }
}

//UPDATE
export const updateRoom= async (req,res)=>{
    try{  
        const updatedRoom=await Room.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {$new:true}
        );
        res.status(200).json(updatedRoom)
 
    }catch(e){
     res.status(500).json(e)
    }
       
}

//Delete
export const deleteRoom= async (req,res)=>{
    try{
        const hotelId= req.params.hotelid;
        const deletedRoom= await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}}) //Removing id from Hotel as well
        res.status(200).json("Hotel Has been Deleted");
    }catch (err){
        res.status(500).json(err);
    }
}

//getById
export const getRoomById=async(req,res)=>{
    try{
        const room= await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err){
        res.status(500).json(err)
    }
}


// //getAll
// export const getAllHotels= async (req,res)=>{
//     try{
//         const hotels=await Hotel.find();
//         res.status(200).json(hotels);
//        }catch(err){
//         res.status(500).json(err);
//        }      

// }