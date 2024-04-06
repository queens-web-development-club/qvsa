const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    dateYear: {
        type: Number,
        required: true,
        maxLength: 4,
    },
    dateMonth: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    files: {
        type: Array,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("event", eventSchema);