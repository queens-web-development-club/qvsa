const members = require("../models/MemberModel");
const mongoose = require("mongoose");

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

    const {name, role} = req.body;

    // TODO: handle file implementation

    try {
        const member = await members.create({name, role});
        res.status(200).json(member);

        console.log(member._id.toString());
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

    const memberToUpdate = await members.findOneAndUpdate({_id: id},
        {
            // New member data (spread props into body). TODO: Add implementation for remaining stuff. Maybe re-create member object?

            /*
            Note: You don't need to update EVERYTHING. Just update what you want and that's all it will change :)
             */
            ...req.body
        });

    if (!memberToUpdate){
        res.status(400).json({error: "No such ID!"});
    }

    res.status(200).json(memberToUpdate);
}

/**
 * Work in progress - disregard for this commit.
 */

const createProfilePic = async (req, res) => {
    // Get id parameter.
    const {id} = req.params;

    /*
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.json(400).json({error: "No such ID!"});
    }*/

    console.log(req.file);
    console.log(req.body.data);

    res.status(200).json({message: "Received file"});


    // Some document exists with this ID, so we can safely link a pfp to it.
    // TODO: Check bookmarks for easy posting of PFP with JSON data :)
}

// Update member

module.exports = {
    getMember,
    getMembers,
    createMember,
    deleteMember,
    updateMember,
    createProfilePic
}