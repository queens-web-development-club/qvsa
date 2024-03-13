// For uploading files to
const multer = require("multer");

// For saving to the file system
//const fs = require("fs");
const path = require("path");
const mime = require("mime-types")

const imageFolder = "./data/users/profiles"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        // test: check if imageFolder exists
        cb(null, imageFolder);
    },
    filename: function(req, file, cb){
        cb(null, req.body.userId + "." + getFileType(file));
    }
})

const fileUpload = multer({storage: storage});

function uploadFile(){
    return fileUpload.single("file");
}

/**
 * Returns the type of the specified file.
 * @param file The file
 * @returns The type of the specified file.
 */

function getFileType(file){
    if (file == null) {
        throw new Error("Cannot get a file type on a null file.");
    }

    return mime.extension(file.mimetype);
}

module.exports = { uploadFile, getFileType, imageFolder };