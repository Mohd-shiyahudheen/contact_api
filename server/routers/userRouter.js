const express = require('express');
const ContactDetails = require('../Controllers/userController');
const router = express.Router()


router.post('/contact',ContactDetails)












module.exports = router;