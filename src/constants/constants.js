"use strict";
const os = require('os');

const PORT = 3000;
const DATA_MAX_LEN = 6;
const HOME_DIR = os.homedir();
const LOCAL_DIR_NAME =  "qr-codes";


module.exports = {
	PORT: PORT,
	DATA_MAX_LEN: DATA_MAX_LEN,
	LOCAL_DIR_NAME: LOCAL_DIR_NAME,
	HOME_DIR : HOME_DIR,

}