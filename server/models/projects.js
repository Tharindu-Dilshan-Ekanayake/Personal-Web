const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link:[ {
        type: String,
        required: true
    }],
    images: [{
        type: String, // Storing base64
        required: true
    }]
}, { timestamps: true });
const Projects = mongoose.model('Projects',projectSchema);
module.exports = Projects;