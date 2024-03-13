/**
 * A class used to define stuff with users.
 */

const TEAM_PFP_PATH = "./res/pfp/"

const {addNewDocument} = require("./database.js");

function createNewUser(name, position, pfpFile) {

    let pfpFileName = "";

    // Create a standardized file name for the user's PFP.
    pfpFileName = name.toLowerCase().replaceAll(" ", "-");

    // TODO: Upload file to cloud.
    //console.log("Name: " + name + ", Position: " + position + ", PFP Path: " + pfpFileName);

}

createNewUser("Elliott Vince", "Backend Dev", "patrickstar.png");
addNewDocument("test", "hi");