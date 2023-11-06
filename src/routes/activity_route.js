const express = require("express");
const { getHistory, createActivity } = require("../controllers/activity_controller");
const auth = require("../middleware/auth")

const activityRoute = express.Router();

activityRoute.get("/get-history", auth, getHistory)

activityRoute.post("/create-activity",auth, createActivity)

module.exports = activityRoute