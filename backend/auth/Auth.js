const fileUtil = require("../fileUtil");
const bcrypt = require("bcryptjs");

const database = require("../database");


/**
 * Registers the API endpoints for authentication.
 * @param app An instance of the express app.
 */

function registerEndpoints(app) {
    app.post("/panel/login", (req, res) => {
        authenticate(req, res);
    });
}

function authenticate(req, res){

    // Grab user and password.
    const {user, password} = req.body;
    console.log(user + " attempting to login with password " + password);
    login(req, res);

    res.status(200).json("Request received!");
}

function login(req, res) {

    const { user, password } = req.body;

    if (!user || !password) {
        res.status(500).json("User or password not defined.");
    }
    else {
        console.log("Valid login info");
        const document = database.getDb().db("backend").coll("users").findOne({name: user});

        if (document) {
            console.log(document);
        }
        else {
            console.log("no match");
        }

    }

}

module.exports = { registerEndpoints };