'use strict';
const constants = require('../../constants/constants');
const util = require('./api.utils');
const fs = require('fs');
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
			qrId: fileName.replace('.png', ''),
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

const getQrImage = async function (req, res) {
	try {
		console.log("inside getQrImage function ::: ");
		const { imageId } = req?.params;
		if (util.validateImageId(imageId)) {
			return res.status(400).json({
				'error': 'INVALID_INPUT',
				'message': 'inavlid Image Id'
			})
		};
		let filePath = constants.HOME_DIR + '/' + constants.LOCAL_DIR_NAME;
		let imageFilePath = filePath + '/' + imageId + '.png';
		if (!fs.existsSync(imageId)) {
			return res.status(404).json({
				'error': "NO_SUCH_FILE",
				'message': "file dosen't exist on the system"
			})
		}
		return res.status(200).sendFile(imageFilePath);
	} catch (err) {
		console.log('error while getting the qr Image :: ' + err);
		return res.status(500).json({
			'error': 'INTERNAL_ERROR',
			'message': 'Error while getting the qr-code '
		});
	}
}




module.exports = {
	genrateQrCode: genrateQrCode,
	getQrImage: getQrImage

}