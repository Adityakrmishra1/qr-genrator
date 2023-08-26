'use strict';
const qrCode = require('qrcode');

const util = require("./api.utils");
const constants = require('../../constants/constants')


const createQrAndGetPath = async function (data) {
	try {
		let timestamp = Date.now();
		let fileName = timestamp + '.png';
		await util.checkAndCreateDirectory(constants.LOCAL_DIR_NAME);
		const filePath = constants.HOME_DIR + '/' + constants.LOCAL_DIR_NAME + '/' + fileName;
		await qrCode.toFile(filePath, data);
		return Promise.resolve(fileName);
	} catch (err) {
		console.log("error while processing the data " + err);
		return Promise.reject("error while processing the data for the qr genration");
	}
}

module.exports = {
	createQrAndGetPath: createQrAndGetPath,
}
