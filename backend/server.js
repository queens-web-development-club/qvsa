//import express from "express";
//import "dotenv/config";

const express = require("express");
const dotenv = require("dotenv/config.js");
const cors = require("cors");
const bodyParser = require("body-parser");

const {connectToDb, getDb, addNewDocument} = require("./database.js");
const { MongoClient, ServerApiVersion } = require("mongodb");
const fileUtil = require("./fileUtil");
const {getFileType} = require("./fileUtil");
const auth = require("./auth/Auth");

// yay files!
const fs = require("fs");
const path = require("path");

//import {MongoClient, ServerApiVersion} from "mongodb";


/*
User guide:
    Starting the server: Open the backend directory in your terminal / command line,
    and run "nodemon server.js"

    Connecting to the server: Open the URL "localhost:8000" in your browser.

    Note: May need to host MongoDB locally? Or use free-tier cloud if possible (ideal).
 */
const app = express();

// cross-origin responses
app.use(cors());

// handles parsing of incoming json requests :)
app.use(express.json());

// Parsing request bodies
app.use(bodyParser.urlencoded({extended: true}));

let db;


connectToDb((err) => {
    if (!err){
        const port = 8000;

        // Listen for incoming requests on localhost:8000
        app.listen(port, () => {
            console.log("Server listening on port " + port + "!");
        })

        // Connection successful.


        app.get("/", (req, res) => {
            res.send({"message": "Connected to QVSA server. Welcome!"});
        });

        db = getDb();

        handleUserRequest();
        handlePost();

        // Register authentication stuff.
        auth.registerEndpoints(app);
    }
    else {
        console.log("Could not connect to the database, so the server will not run.");
    }
});

async function handlePost(){
    console.log("Listening for POST requests");

    // Handle uploading of profile pic
    app.post("/users", fileUtil.uploadFile(), (req, res) => {

        let uuid = req.body.userId;
        const fileName = uuid + "." + getFileType(req.file);

        // Create document for MongoDB using the form data.
        const document = {
            name: req.body.name,
            position: req.body.position,
            uuid: uuid,
            fileName: fileName
        }

        // Submit POST request to MongoDB.
        let success = addNewDocument("team-members", document);
        if (success) {
            console.log("Successfully added the document to the database!");
            res.status(200).send("File uploaded successfully.");
        }
        else {
            // No bueno.
            res.status(500).send("Something went wrong while submitting the POST request.");
        }
    });
}
async function handleUserRequest() {
    app.get("/users", async (req, res) => {

        // Get a JSON object containing all user data.
        const members = await db.collection("team-members").find().toArray();
        res.send(members);
    });

    app.get("/users/img/:id", (req, res) => {
        const fileName = req.params.id;
        console.log("Client wants file \"" + fileName + "\"");
        res.sendFile(path.join(__dirname, fileUtil.imageFolder + "/" + fileName));
    });

    /*
    TODO:
    - UPDATE existing users
    - DELETE existing users
    - Login / Sign Up (For admins... adding via db?)
    - Restricting access to certain pages (admins only).
     */
}

function initProject() {
    // Initialize file paths.

}