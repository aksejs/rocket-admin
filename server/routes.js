const express = require('express');
const clientsCtrl = require('./controllers/clients');

const router = express.Router();

router.post('/client/:type', clientsCtrl);

module.exports = router;