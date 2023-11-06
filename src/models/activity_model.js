const mongoose = require("mongoose");

const activityModel = mongoose.Schema({

    startTime : {
        type : Date,
        required: true
    },

    endTime : {
        type: Date,
        required: true 
    },

    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Activity", activityModel)


