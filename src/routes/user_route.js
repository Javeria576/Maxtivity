const express = require("express");
const { signin, signup } = require("../controllers/user_controller");

const userRoute = express.Router();

userRoute.post("/sign_in", signin)
userRoute.post("/sign_up", signup)

module.exports = userRoute