const express = require("express");
const {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require("../controllers/EventController");

const router = express.Router();

router.get("/", getEvents);

router.get("/:id", getEvent);

router.post("/", createEvent);

router.delete("/:id", deleteEvent);

router.patch("/:id", updateEvent);

// export the router.
module.exports = router;