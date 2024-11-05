const express = require('express');
const { listItems } = require('../controllers/itemsController');
const router = express.Router();

router.get('/', listItems);

module.exports = router;
