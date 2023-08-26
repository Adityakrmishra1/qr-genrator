"use strict";

const express = require('express');
const apiController = require('../api/api.controller');

const router = express.Router();

router.post('/generate-qr-code', apiController.genrateQrCode);
router.get('/get-qr-code/:imageId', apiController.getQrImage);


module.exports = router;