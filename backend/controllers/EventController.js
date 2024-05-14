const mongoose = require("mongoose");
const fs = require("fs");
const fsExtra = require("fs-extra");
const fileUtil = require("../util/FileUtil");

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

const getEventFiles = async (req, res) => {
    const {id, file} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID!"});
    }

    const event = await events.findById(id);

    if (!event) {
        return res.status(400).json({error: "No event was found with that ID!"});
    }

    let imgPath = path.join(__dirname, "../data/events/", id, file);

    fs.readFile(imgPath, (err, fileData) => {
        if (err) {
            return res.status(404).json({error: "File not found!"})
        }
        else {
            res.download(imgPath);
        }
    })
}

const createEvent = async (req, res) => {

    if (req.files.length === 0){
        return res.status(400).json("You must include 1+ images with this event!");
    }

    // Get all files in the upload.
    let files = [];
    req.files.forEach((file) => {
        files.push(file.originalname);
    });

    const {title, dateYear, dateMonth, description} = req.body;

    const directoryID = req.app.locals.directoryID;

    try {
        const event = await events.create({title, dateYear, dateMonth, description, files});

        let file = req.files[0];

        const dataFolder = path.join(__dirname, "../data/events");

        const oldFolder = path.join(__dirname, "../data/events", directoryID);

        const newFolder = path.join(dataFolder, event._id.toString());

        fs.mkdirSync(newFolder, {recursive: true});

        // Change folder to use the document's object ID (easier to get on client-side)
        fsExtra.copySync(oldFolder, newFolder);
        fsExtra.removeSync(oldFolder);

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


    // Handle file changes. Note: You can only add extra files here, not delete them.
    if (req.files.length !== 0) {
        let files = eventToUpdate.get("files");

        req.files.forEach(file => files.push(file.originalname));

        eventToUpdate.set("files", files);
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

    /*
     Gets files to delete. Note that events should always contain 1+ images,
     so this function should have something to delete.
     */

    await fileUtil.deleteFile(path.join(__dirname, "../data/events/", id), (err) => {
        if (err) {
            return res.status(500).json({error: "[DELETE event] Internal server error. Could not delete the folder!"});
        }
        else {
            return res.status(200).json(eventToDelete);
        }
    });
}
// TODO: Add delete-all function.
// TODO: Add deleteEventFile function to delete specific files. (this is a feature to polish it up)

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventFiles
}