'use strict';
const express = require("express");
const fs = require('fs');

const constants = require("../../constants/constants");


const validateData = function (data) {
	console.log("data : ", data);
	if (!data || data.length !== constants.DATA_MAX_LEN || typeof data !== 'string') {
		return true;
	}
	return false;

}

let checkAndCreateDirectory = async function (directoryPath) {
	directoryPath = constants.HOME_DIR + '/' + directoryPath;
	return fs.stat(directoryPath, (error, stats) => {
		if (error && error.code === 'ENOENT') {
			fs.mkdir(directoryPath, (err) => {
				return err ?
					Promise.reject("error while creating the directory " + err)
					: Promise.resolve()
			});
		} else if (error) {
			return Promise.reject("error : " + error);
		} else {
			return stats.isDirectory() ?
				Promise.resolve() :
				Promise.reject("the directory name is not a name of directory");
		}
	});
}

let validateImageId = function (data) {
	console.log("Image Id ::: " + data);
	const pattern = /[^0-9a-zA-Z]/g;
	const matches = data.match(pattern);
	return (matches && matches.length !== 0);

}

module.exports = {
	validateData: validateData,
	checkAndCreateDirectory: checkAndCreateDirectory,
	validateImageId: validateImageId,
}