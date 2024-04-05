const express = require("express");
const members = require("../models/MemberModel");
const multer = require("multer");

const {
    createMember,
    getMember,
    getMembers,
    deleteMember,
    updateMember,
    createProfilePic
} = require("../controllers/MemberController");

const router = express.Router();

// for file uploading
const upload = multer({dest: "uploads"});

router.get("/", getMembers);

router.get("/:id", getMember);

router.post("/", createMember);

/*
Note: The argument of upload.single() needs to be the key in the formdata.
 */
router.post("/pfp/:id", upload.single("file"), createProfilePic);

router.delete("/:id", deleteMember);

router.patch("/:id", updateMember);

module.exports = router;