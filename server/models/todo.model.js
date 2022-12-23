const mongoose=require("mongoose");

// structure of todo collection
const todoSchema= new mongoose.Schema({
  title:{type:String, required:true},
  startTime:{type:Date, default:new Date().getTime(), required:false},
  endTime:{type:Date, required:false},
  isDone:{type:String, default:false}
},{
  timestamps:true,
  versionKey:false
});


// todos collection(or model)
const ToDo= new mongoose.model("todo",todoSchema);

module.exports=ToDo;