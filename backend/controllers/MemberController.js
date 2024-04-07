const members = require("../models/MemberModel");
const mongoose = require("mongoose");
const events = require("../models/EventModel");
const path = require("path");
const fs = require("fs");

// Get all members

const getMembers = async (req, res) => {
    const membersJson = await members.find();

    res.status(200).json(membersJson);
}

// Get single member
const getMember = async (req, res) => {
    // Gets the :id from the url.
    const {id} = req.params;

    // we must validate the ID to avoid errors.
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such ID!"});
    }

    const member = await members.findById(id);

    if (!member){
        return res.status(404).json({error: "Member not found!"});
    }

    // Success
    res.status(200).json(member);
}

// Add new member
const createMember = async (req, res) => {

    if (req.files.length !== 1) {
        return res.status(400).json("You must include exactly 1 image with this request!");
    }

    const {name, role} = req.body;

    try {
        const file = req.files[0];
        const fileName = file.filename;

        const member = await members.create({name, role, fileName});

        res.status(200).json(member);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Delete member
const deleteMember = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such ID!"});
    }

    const deletedMember = await members.findOneAndDelete({_id: id});

    if (!deletedMember) {
        // Success
        return res.status(400).json({error: "Member not found."});
    }

    res.status(200).json(deletedMember);
}

const updateMember = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such ID!"});
    }

    const memberToUpdate = await members.findOneAndUpdate({_id: id}, {
            ...req.body
    });

    if (req.files.length !== 0){
        // update
    }

    if (!memberToUpdate){
        res.status(400).json({error: "No such ID!"});
    }

    res.status(200).json(memberToUpdate);
}

const getMemberFile = async(req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID!"});
    }

    const member = await members.findById(id);

    if (!member) {
        return res.status(400).json({error: "No member found with that ID!"});
    }

    let imgPath = path.join(__dirname, "../data/team", member.get("fileName"));

    res.download(imgPath, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({error: "Internal server error!"});
        }
    })
}

// Update member

module.exports = {
    getMember,
    getMembers,
    createMember,
    deleteMember,
    updateMember,
    getMemberFile
}