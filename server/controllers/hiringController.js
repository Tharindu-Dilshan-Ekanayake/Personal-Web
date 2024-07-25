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

module.exports = {
    postmessage
}