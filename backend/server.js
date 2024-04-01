const express = require("express");
require("dotenv").config();

// express app
const app = express();
const teamRoutes = require("./routes/teamRoutes");
const eventRoutes = require("./routes/eventRoutes");

// allows use for req.body as the JSON is parsed.
app.use(express.json());
app.use((req, res, next) => {

    // handles middleware. must call next at the end.
    console.log(req.path, req.method);
    next();
})

// Points requests to team-members
app.use("/api/team", teamRoutes);
app.use("/api/events", eventRoutes);

// listen on port 8000
app.listen(process.env.PORT, () => {
   console.log("Listening on port 8000");
});