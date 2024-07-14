const express = require('express');
const router = express.Router();
const cors = require('cors');
const { 
    createProject, 
    getAllProjects, 
    getProjectById, 
    updateProject, 
    deleteProject 
} = require('../controllers/projectController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

// Create a new project
router.post('/projects', createProject);

// Get all projects
router.get('/projects', getAllProjects);

// Get a specific project by ID
router.get('/projects/:id', getProjectById);

// Update a project
router.put('/projects/:id', updateProject);

// Delete a project
router.delete('/projects/:id', deleteProject);

module.exports = router;