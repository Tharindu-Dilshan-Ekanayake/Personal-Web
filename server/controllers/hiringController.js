const Hiring = require('../models/hiring');

//post message
const postmessage = async (req, res)=>{
    try {
        const {name_user, email , mobile, message} = req.body;

        //create database
        const newHiring = new Hiring({
            name_user, 
            email , 
            mobile, 
            message 
        });

        await newHiring.save();
        res.status(201).json({ message: 'Message created successfully', hiring: newHiring });
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to create blog post' });
    }
}
//get all 
const getallmessage = async (req, res) => {
    try {
        const message = await Hiring.find();
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ' });
    }
}

//get read is true
const getreadmessage = async (req, res) => {
    try {
        const message = await Hiring.find({read:true});
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ' });
    }
}

//get unread
const getunreadmessage = async (req, res) => {
    try {
        const message = await Hiring.find({read:false});
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ' });
    }
}

//delete message
const deletemessage = async(req, res) => {
    try {
        const deleteHiring = await Hiring.findByIdAndDelete(req.params.id);

        if(!deleteHiring){
            return res.status(404).json({ error: 'message not found' });
        }
        res.status(200).json({ message: ' deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete ' });
    }
}

module.exports = {
    postmessage,
    getallmessage,
    getreadmessage,
    getunreadmessage,
    deletemessage
}