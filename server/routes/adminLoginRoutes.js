const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createAdmin, loginAdmin } = require('../controllers/adminLoginController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/register', createAdmin);
router.post('/login', loginAdmin);

module.exports = router;