const express = require('express');
const router = express.Router();
const cors = require('cors');
const { postmessage } = require('../controllers/hiringController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);
router.post('/hiremepost', postmessage);

module.exports = router;