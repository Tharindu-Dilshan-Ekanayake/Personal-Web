const express = require('express');
const router = express.Router();
const cors = require('cors');
const { 
    getAllVlogs,
    
    createVlog,
    updateVlog,
    deleteVlog
} = require('../controllers/vlogsController');

// Apply CORS middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

// GET all vlogs
router.get('/vlogs', getAllVlogs);

// POST a new vlog
router.post('/postvlog', createVlog);

// PUT (update) an existing vlog
router.put('/vlogs/:id', updateVlog);

// DELETE a vlog
router.delete('/vlogs/:id', deleteVlog);

module.exports = router;