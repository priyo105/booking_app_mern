import Hotel from "../models/Hotel.js";


//CREATE 
export const createHotel= async (req,res)=>{
    const newHotel=new Hotel(req.body);
    try{  
    const savedHotel= await newHotel.save()
    res.status(200).json(savedHotel)
 
    }catch(e){
     res.status(500).json(e)
    } 

}

//UPDATE
export const updateHotel= async (req,res)=>{
    try{  
        const updatedHotel=await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {$new:true}
        );
        res.status(200).json(updatedHotel)
 
    }catch(e){
     res.status(500).json(e)
    }
       
}

//Delete
export const deleteHotel= async (req,res)=>{
    try{
        const deletedHotel= await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Has been Deleted");
    }catch (err){
        res.status(500).json(err);
    }
}

//getById
export const getHotelById=async(req,res)=>{
    try{
        const hotel= await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err){
        res.status(500).json(err)
    }
}


//getAll
export const getAllHotels= async (req,res)=>{
    try{
        const hotels=await Hotel.find();
        res.status(200).json(hotels);
       }catch(err){
        res.status(500).json(err);
       }      

}