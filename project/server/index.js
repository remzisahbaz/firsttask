
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app =express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors()); // with connect

app.get("/",(req,res)=>{res.json({
    author:"Coding with Firsttask....",
    message:"My First tast starting ..",
});
});
app.use("/posts",postRoutes);

const PORT=process.env.PORT||5000;


mongoose.connect(process.env.CONNECT_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server çalıştığı port: ${PORT}`); });
}).catch(error=>{
    console.error(error.message);

});
