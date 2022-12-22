const mongoose=require("mongoose");

// structure of todo collection
const todoSchema= new mongoose.Schema({
  title:{type:String, required:true},
  startTime:{type:Date, default:Date.now},
  endTime:{type:Date},
  duration:{type:Date},
  isDone:{type:String, default:false}
},{
  timestamps:true,
  versionKey:false
});


// todos collection(or model)
const ToDo= new mongoose.model("todo",todoSchema);

module.exports=ToDo;