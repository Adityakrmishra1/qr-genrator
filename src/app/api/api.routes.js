"use strict";

const express = require('express');
const apiController = require('../api/api.controller');

const router = express.Router();

router.post('/generate-qr-code', apiController.genrateQrCode);

module.exports = router;