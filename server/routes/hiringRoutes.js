const express = require('express');
const router = express.Router();
const cors = require('cors');
const { postmessage, getallmessage, getreadmessage, getunreadmessage, deletemessage, setMessageAsRead } = require('../controllers/hiringController')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);
router.post('/hiremepost', postmessage);
router.get('/getmessage', getallmessage);

router.get('/getreadmessage', getreadmessage);
router.get('/getunreadmessage', getunreadmessage);

router.delete('/deletemessage/:id', deletemessage)

router.put('/putread/:id', setMessageAsRead)

module.exports = router;