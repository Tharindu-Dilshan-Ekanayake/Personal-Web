const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createadmin } = require('../controllers/adminLoginController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/register',createadmin);

module.exports = router;