const mongoose = require("mongoose");
const events = require("../models/EventModel");

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
    const {title, dateYear, dateMonth, description} = req.body;

    try {
        const event = await events.create({title, dateYear, dateMonth, description});
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