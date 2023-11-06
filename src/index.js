const express = require("express");
const app = express()
const moongoose = require("mongoose");
const userRoute = require("./routes/user_route");
const cors = require("cors");
const activityRoute = require("./routes/activity_route");
const dotenv= require("dotenv");

dotenv.config();

app.use(express.json())
app.use(cors())
app.use("/user", userRoute)
app.use("/activity", activityRoute)

app.get("/", (req,res) => {
    res.status(200).json("Running")
});

const PORT = process.env.PORT || 5001
moongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, ()=> {
        console.log("Server listening on port " + PORT)
    });
    
}).catch((error)=> {
    console.log(error)
})