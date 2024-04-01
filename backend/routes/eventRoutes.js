const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json("GET all events");
});

router.get("/:id", (req, res) => {
    res.json("GET single event")
});

router.post("/", (req, res) => {
    res.json("POST single event")
});

router.delete("/:id", (req, res) => {
    res.json("DELETE single event")
});

router.patch("/:id", (req, res) => {
    res.json("PATCH single event")
});

// export the router.
module.exports = router;