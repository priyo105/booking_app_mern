import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import userRoute from "./routes/user.js"

import cookieparser from "cookie-parser"

const app= express();
dotenv.config();

//connect to DB
const connectToDb=async()=>{
try{
    await  mongoose.connect("mongodb+srv://adnankamal972:M6FEtwdOixM1VpjD@cluster0.ky4xi2x.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected to mongo Db successfully")
}catch(e){
    throw e;
}
};



//some mongo db listeners

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb reconnected")
})


//middlewares

app.use(express.json()) //it allows express to parse json requests
//for using cookie
app.use(cookieparser())

app.use("/auth", authRoute);
app.use("/hotels",hotelRoute);
app.use("/rooms",roomRoute);
app.use("/user",userRoute)


// App listens to port 8000

app.listen(8000,()=>{
    connectToDb()
    console.log("Listening to port 8000")
});

