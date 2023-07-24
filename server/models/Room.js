import mongoose from "mongoose";

const RoomSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },

  price:{
    type:Number,
    required:true,
  },
  
  Description:{
    type: String,

  },
  
  maxPeople:{
    type:Number,
    required:true
  },
  
  roomNumbers : [{ number : Number, unavailabeDates: [{type: Date}]}] 

  
  // example json of roomnumber would be 

//   [
    
//         {number: 101, unavailabeDates:['2023-01-23','2023-01-31','2023-01-26']},
//         {number: 102, unavailabeDates:[]},
//         {number: 103, unavailabeDates:[]},
    
//   ]

  
}, {timestamps:true})


export default mongoose.model("Room",RoomSchema)