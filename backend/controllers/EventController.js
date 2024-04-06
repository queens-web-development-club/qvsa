const mongoose = require("mongoose");
const fs = require("fs");
const fsExtra = require("fs-extra");

const multer = require("multer");
const path = require("path");


const events = require("../models/EventModel");
const {extension} = require("mime-types");

const getEvents = async (req, res) => {
    const eventsJson = await events.find();

    res.status(200).json(eventsJson);
};

const getEvent = async (req, res) => {

    const {id} = req.params;

    // Validate id.
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Invalid ID!"});
    }

    const event = await events.findById(id);

    res.status(200).json(event)
};

const createEvent = async (req, res) => {

    if (req.files.length === 0){
        return res.status(400).json("You must include 1+ images with this event!");
    }

    const {title, dateYear, dateMonth, description} = req.body;

    const directoryID = req.app.locals.directoryID;

    try {
        const event = await events.create({title, dateYear, dateMonth, description});

        let file = req.files[0];

        const dataFolder = path.join(__dirname, "../data/team");

        const oldFolder = path.join(__dirname, "../data/team", req.app.locals.directoryID);

        const newFolder = path.join(dataFolder, event._id.toString());

        fs.mkdirSync(newFolder, {recursive: true});

        fsExtra.copySync(oldFolder, newFolder);
        fsExtra.removeSync(oldFolder);

        /*
        fs.rename(oldFolder, newFolder, (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Files successfully renamed!");
            }
        });*/

        res.status(200).json(event);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateEvent = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID!"});
    }

    const eventToUpdate = await events.findOneAndUpdate({_id: id}, {
       ...req.body
    });

    if (!eventToUpdate) {
        // No event with that ID.
        return res.status(400).json({error: "No event found with that ID!"});
    }

    return res.status(200).json(eventToUpdate);
}

const deleteEvent = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID!"});
    }

    const eventToDelete = await events.findOneAndDelete({_id: id});

    if (!eventToDelete) {
        // No event with that ID.
        return res.status(400).json({error: "No event found with that ID!"});
    }

    return res.status(200).json(eventToDelete);
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}