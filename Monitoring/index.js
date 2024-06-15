const express = require("express");
const {doSomeHeavyTask} = require("./util");

const app = express();
const PORT = process.env.PORT || 8000;
app.get("/",(req,res)=>{

})

app.get("/slow",async(req,res)=>{
   try{
    const timeTaken = await doSomeHeavyTask();
    return res.json({
        status:"Success",
        message:`Heavy task compeleted in ${timeTaken}ms`
    });
   }catch(error){
    return res.status(500).json({status:"Error",error:"Internal Server Error"})
   }
})

app.listen(PORT , ()=>
console.log(`Express server is running on http://localhost:${PORT}`));