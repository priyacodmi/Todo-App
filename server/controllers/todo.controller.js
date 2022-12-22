let express=require("express");
let Todo=require("../models/todo.model");
let { body, validationResult } = require('express-validator');
let router=express.Router();



//create a todo API
router.post("/createTodo",
body('title').notEmpty().withMessage("Todo feild should not be empty, please enter your todo"),
async(req,res)=>{
  try {
    let errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({error:errors.array()});
    }
    let todo= await Todo.create(req.body);
    return res.status(200).json({message:"Todo created successfully", todo:todo});
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
});



// get all todo API
router.get("/all",async(req,res)=>{
  try {
    let todos= await Todo.find({}).lean().exec();
    return res.status(200).json({message:"Todos fetched successfully", todos:todos});
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
});




// get a sinlge todo by it's ID API
router.get("/:id",async(req,res)=>{
  try {
    let todo = await Todo.findById(req.params.id).lean().exec();
    if(!todo){
      return res.status(400).json({message:"Todo is not found"});
    }
    return res.status(200).json({message:"Todo fetched successfully", todo:todo});
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
});




// Update API
router.put("/changeTitle/:id",
body("title").notEmpty().withMessage("Title is required to update"),
async(req,res)=>{
  try {
    let errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(401).json({error:errors.array()});
    }
    let todo = await Todo.findById(req.params.id).lean().exec();
    if(!todo){
      return res.status(400).json({message:"Todo is not found"});
    }
    todo= await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
    return res.status(200).json({message:"Todos updated successfully", todo:todo});
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
});


router.put("/changeStatus/:id",
body("isDone").notEmpty().withMessage("Status is required to update the status of todo"),
async(req,res)=>{
  try {
    let errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(401).json({error:errors.array()});
    }
    let todo = await Todo.findById(req.params.id).lean().exec();
    if(!todo){
      return res.status(400).json({message:"Todo is not found"});
    }
    todo= await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
    return res.status(200).json({message:"Todos updated successfully", todo:todo});
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
});




// Delete API
router.delete("/:id",async(req,res)=>{
  try {
    let todo = await Todo.findById(req.params.id).lean().exec();
    if(!todo){
      return res.status(400).json({message:"Todo is not found"});
    }
    todo= await Todo.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).json({message:"Todos deleted successfully", todo:todo});
  } catch (error) {
    return res.status(500).json({message:error.message});
  }
});



module.exports=router;