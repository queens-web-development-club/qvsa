import express from "express";
import cors from "cors";

/*
User guide:
    Starting the server: Open the backend directory in your terminal / command line,
    and run "nodemon server.js"

    Connecting to the server: Open the URL "localhost:8000" in your browser.

    Note: May need to host MongoDB locally? Or use free-tier cloud if possible (ideal).
 */

const app = express();

// Enable CORS for all routes
app.use(cors()); 

app.get("/", (req, res) => {
    res.send("Connected to server. Welcome to the QVSA server!");
});

const port = 8000;

// Listen for incoming requests on localhost:8000
app.listen(port, () => {
    console.log("Server listening on port " + port + "!");
})