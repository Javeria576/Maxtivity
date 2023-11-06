const activity_model = require("../models/activity_model");

const createActivity = async (req, res) => {

    const {startTime, endTime} = req.body;
    const createActivity = activity_model({
        startTime : startTime,
        endTime : endTime,
        userId : req.userId
    });

    try{
        await createActivity.save();
        res.status(201).json(createActivity);
    }
    catch(error){
        console.log(error)
        res.status(500).json("Something went wrong");
    }
}

const getHistory = async (req, res) => {

    try{
        const history = await activity_model.find({userId : req.userId})
        res.status(200).json(history)
    }
    catch(error){
        console.log(error)
        res.status(500).json("Something went wrong");
    }

}

module.exports = {createActivity, getHistory}