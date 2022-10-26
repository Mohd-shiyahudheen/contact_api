const express = require('express');
const {ContactDetails, updateData} = require('../Controllers/userController');
const router = express.Router()


router.post('/contact',ContactDetails)
router.put('/edit/:id',updateData)












module.exports = router;