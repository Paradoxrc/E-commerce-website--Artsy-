const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('sucseccs!')).catch((err)=>{console.log(err);});

app.use("/api/user",userRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running!");
});