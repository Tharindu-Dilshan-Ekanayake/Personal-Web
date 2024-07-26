const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createAdmin, loginAdmin, getAdmin, logoutAdmin } = require('../controllers/adminLoginController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.post('/register', createAdmin);
router.post('/login', loginAdmin);
router.get('/admin', getAdmin);
router.post('/logout', logoutAdmin);

module.exports = router;