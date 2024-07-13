const Vlogs = require('../models/vlogs');

//vlogs post endpoint
const createVlogs = async (req, res) => {
    try {
        const {category,
                title,
                subject,
                description,
                link,
                cover_image} = req.body;

        //create Vlogs
        const vlog = await Vlogs.create({
            category,
                title,
                subject,
                description,
                link,
                cover_image
        });
        return res.status(200).json({message:'posted vlog successfully', vlog})
    } catch (error) {
        
    }
}

module.exports = {
    createVlogs
}