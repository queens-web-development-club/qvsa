/*

import {MongoClient} from "mongodb";
import "dotenv/config";

*/

const {MongoClient} = require("mongodb");
const dotenv = require("dotenv/config.js");

let dbConnection;


function connectToDb(cb) {
    let user = process.env["USER"];
    let pw = process.env["PASSWORD"];

    console.log("Attempting to connect: " + user + ", " + pw);

    //const uri = `mongodb+srv://${user}:${pw}@qvsa-website.xczp5dl.mongodb.net
    //   /hello?retryWrites=true&w=majority&appName=qvsa-website`;

    // remember to append strings to newline LOL
    const uri = `mongodb+srv://${user}:${pw}@qvsa-website.xczp5dl.mongodb.net/` +
        `team-info?retryWrites=true&w=majority&appName=qvsa-website`;

    MongoClient.connect(uri).then((client) => {
        console.log(`Successfully connected to the MongoDB database. Welcome, ${user}!`);

        // Set db connection
        dbConnection = client.db();
        // Execute callback function
        return cb();

    }).catch((err) => {
        console.log("Could not connect to the MongoDB database: " + err.message);
        return cb(err);
    });
}

function getDb() {
    return dbConnection;
}

/**
 * Adds some JSON document to the specified collection.
 * @param collection The name of the collection.
 * @param document
 *
 * @return true if the document was added, otherwise false.
 */
function addNewDocument(collection, document){

    if (getDb().collection(collection) == null){
        console.log(`Collection ${collection} does not exist!`)
        return false;
    }

    // Add to db
    getDb().collection(collection).insertOne(document);
    return true;
}

module.exports = { connectToDb, getDb, addNewDocument }