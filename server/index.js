const express =require("express");
const app =express();
const portNo =5678;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"welcome to registration"
    })
})
app.listen(portNo,()=>{
    console.log(`server is running on portNo ${portNo}`)
})