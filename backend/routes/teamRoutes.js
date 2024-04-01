const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json("GET all team members");
});

router.get("/:id", (req, res) => {
    res.json("GET single team member")
});

router.post("/", (req, res) => {
    res.json("POST single team member")
});

router.delete("/:id", (req, res) => {
    res.json("DELETE single team member")
});

router.patch("/:id", (req, res) => {
    res.json("PATCH single team member")
});

module.exports = router;