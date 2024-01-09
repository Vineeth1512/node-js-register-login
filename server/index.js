const express = require("express");
const mongoose =require("mongoose");
const userRouter = require("./routes/user.routes");
const app = express();
const portNo = 5678;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to registration"
    })
})
app.use(userRouter);


mongoose.connect('mongodb+srv://dbUser:dbUserPassword@atlascluster.w6sb48g.mongodb.net/Register?retryWrites=true&w=majority').then(() => {
    console.log(`Mongodb connected`);
}).catch((err) => {
    console.log(err);
})
app.listen(portNo, () => {
    console.log(`server is running on portNo ${portNo}`)
})