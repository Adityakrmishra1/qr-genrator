'use strict';
const qrCode = require('qrcode');
const ShortUniqueId = require('short-unique-id');
const util = require("./api.utils");
const constants = require('../../constants/constants')
const fs = require('fs');


const createQrAndGetPath = async function (data) {
	try {
		let uid = new ShortUniqueId({ length: 7 });
		let fileName = uid.stamp(32) + '.png';
		await util.checkAndCreateDirectory(constants.LOCAL_DIR_NAME);
		const filePath = constants.HOME_DIR + '/' + constants.LOCAL_DIR_NAME + '/' + fileName;
		await qrCode.toFile(filePath, data);
		return Promise.resolve(fileName);
	} catch (err) {
		console.log("error while processing the data " + err);
		return Promise.reject("error while processing the data for the qr genration");
	}
}

let validateForImage = function (imageId) {
	try {
		return fs.existsSync(imageId) === true ? Promise.resolve() :
			Promise.reject("File don't exist");

	} catch (error) {
		console.log("error while checking for the imageId " + error);
		return Promise.reject('error while checking for the imageId');
	}
}

module.exports = {
	createQrAndGetPath: createQrAndGetPath,
	validateForImage: validateForImage
}
