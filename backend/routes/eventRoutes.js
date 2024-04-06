const express = require("express");
const multer = require("multer");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

const {
    getEvent,
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventFiles
} = require("../controllers/EventController");

const router = express.Router();
router.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        /*
        Note to self: When using multer, req.body will not be populated if files are sent first.
        Instead, always make sure to define files at the end of the form-data.
         */

        const directoryID = req.app.locals.directoryID;

        const dir = path.resolve(__dirname, "../data/team/", directoryID);

        // create directory for this upload. creates all necessary directories
        fs.mkdir(dir, {recursive: true}, (err) => {
            cb(null, dir);
        });
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname);
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

// Custom middleware
function assignUUID(req, res, next) {
    req.app.locals.directoryID = uuid.v4();

    next();
}

// Routes

router.get("/", getEvents);

router.get("/:id", getEvent);

/*
 any() handles single or multiple files. woohoo!
 also, we can define multiple middleware functions! (order-dependent). yay!
 */

router.post("/", assignUUID, upload.any(), createEvent);

router.delete("/:id", deleteEvent);

router.patch("/:id", updateEvent);

router.get("/img/:id/:file", getEventFiles);

// export the router.
module.exports = router;