const express=require("express");
const connectDB=require("./configs/db");
require('dotenv').config();
const cors=require("cors");
const todoController=require("./controllers/todo.controller");

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res,next)=>{
  return res.send("Welcome to Home Page")
})

app.use("/api/todos", todoController);

let port= process.env.PORT;
if(port == null || port == ""){
  port = 8000;
}


//app is listening here
app.listen(5000,async()=>{
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  console.log(`your app is listening at: http://localhost:5000`);
})

