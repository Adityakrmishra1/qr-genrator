'use strict';
const express = require("express");
const fs = require('fs');
const os = require('os');


const constants = require("../../constants/constants");


const validateData = function (data) {
	console.log("data : ", data);
	if (!data || data.length !== constants.DATA_MAX_LEN || typeof data !== 'string') {
		return true;
	}
	return false;

}

let checkAndCreateDirectory = async function (directoryPath) {
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


module.exports = {
	validateData: validateData,
	checkAndCreateDirectory: checkAndCreateDirectory,
}