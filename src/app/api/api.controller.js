'use strict';
const constants = require('../../constants/constants');
const util = require('./api.utils');
const apiService = require('./api.service')

const genrateQrCode = async function (req, res) {
	try {
		console.log('inside the genrateQrCode function .....');
		let { data } = req?.body;
		if (util.validateData(data)) {
			return res.status(400).json({
				status: "error",
				error: {
					details: `Input data should be ${constants.DATA_MAX_LEN} character`
				}
			});
		}
		let fileName = await apiService.createQrAndGetPath(data);
		console.log("path : " + fileName);
		return res.status(200).json({
			filename: fileName,
			originalString: data,
			message: 'yay your qr code is genrated and saved'
		});
	} catch (err) {
		console.log('error while genrating the qr code ...' + err);
		return res.status(500).json({
			status: "error",
			error: {
				details: `error :: ${err}`
			}
		})
	}
}





module.exports = {
	genrateQrCode: genrateQrCode,

}