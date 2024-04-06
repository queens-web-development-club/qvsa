require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// express app
const app = express();
const teamRoutes = require("./routes/teamRoutes");
const eventRoutes = require("./routes/eventRoutes");

// allows use for req.body as the JSON is parsed.
//app.use(express.json());
app.use((req, res, next) => {

    // handles middleware. must call next at the end.
    next();
})

// Points requests to team-members
app.use("/api/team", teamRoutes);
app.use("/api/events", eventRoutes);

mongoose.connect(process.env["MONGO_URI"], {
    dbName: "data"
})
.then(() => {
    // listen on port 8000
    app.listen(process.env.PORT, () => {
        console.log("Listening on port 8000");
    });
})
.catch((error) => {
    console.log(error)
})

