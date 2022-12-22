const mongoose=require("mongoose");

// connect to database
const connectDB=()=>{
  return mongoose.connect(`mongodb+srv://priyaranjan:priyaranjan@cluster0.wstjvy5.mongodb.net/test`);
}

module.exports=connectDB;