const mongoose = require('mongoose');
const vlogSchema = new mongoose.Schema({
    
    category:{
        type: String,
        required: true
    },
    Title:{
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
       
    },
    link: {
        type: String,
        required: true
    },
    cover_image : {
        type: String,
        
    }
})
const Vlogs = mongoose.model('Vlogs', vlogSchema);
module.exports = Vlogs;
