const express = require("express");
const members = require("../models/MemberModel");
const multer = require("multer");

const uuid = require("uuid");
const path = require("path");

const {
    createMember,
    getMember,
    getMembers,
    deleteMember,
    updateMember,
    getMemberFile
} = require("../controllers/MemberController");
const fs = require("fs");

const router = express.Router();

// for file uploading
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // TODO: Prevent users from uploading 2+ photos (worst-case: do this on client-side)
        let dir = path.resolve(__dirname, "../data/team/");
        fs.mkdir(dir, {recursive: true}, (err) => {
            cb(null, dir);
        });
    },
    filename: function (req, file, cb) {
        let extension = file.mimetype.split("/")[1];
        let fileName = req.body.name.replace(" ", "-") + "." + extension;

        cb(null, fileName);
    },
    fileFilter: function (req,file, cb) {
        if (file.mimetype === "image/jpeg" || file.mime === "image/png"){
            cb(null, true);
        }
        else {
            cb(new Error("Invalid file type. Must be .jpg or .png"));
        }
    }

});

const upload = multer({storage: storage});

router.get("/", getMembers);

router.get("/:id", getMember);

router.post("/", upload.any(), createMember);

/*
Note: The argument of upload.single() needs to be the key in the form-data.
We're not using this approach anymore, but I thought I'd leave it in here
as it's a good help.
 */

router.delete("/:id", deleteMember);

router.patch("/:id", updateMember);

router.get("/img/:id", getMemberFile);

module.exports = router;