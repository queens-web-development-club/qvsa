// MongoDB is schemaless; we need mongoose to create them
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
    // timestamps tracks creation time and updating
}, {timestamps: true});

module.exports = mongoose.model("member", memberSchema);