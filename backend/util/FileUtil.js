const fs = require("fs");

/**
 * Deletes the file at the given path.
 * @param path The absolute path of the file to delete.
 * @param cb The callback function to execute
 */
async function deleteFile(path, cb) {
    console.log("attempting to delete " + path);

    await fs.rm(path, {recursive: true, force: true}, err => {
        cb(err);
    })
}

module.exports = { deleteFile };