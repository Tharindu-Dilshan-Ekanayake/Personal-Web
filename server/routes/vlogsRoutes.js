const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createVlogs } = require('../controllers/vlogsController');


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/postvlog', createVlogs)

module.exports = router;