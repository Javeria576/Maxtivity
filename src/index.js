const express = require("express");
const app = express()
const moongoose = require("mongoose");
const userRoute = require("./routes/user_route");
const cors = require("cors");
const activityRoute = require("./routes/activity_route");

app.use(express.json())
app.use(cors())
app.use("/user", userRoute)
app.use("/activity", activityRoute)

moongoose.connect("mongodb+srv://sidrali:s5RX92afyvKe0buO@cluster0.r4p1dav.mongodb.net/?retryWrites=true&w=majority").then(() => {
    app.listen(5001, ()=> {
        console.log("Server listening on port 5000")
    });
}).catch((error)=> {
    console.log(error)
})