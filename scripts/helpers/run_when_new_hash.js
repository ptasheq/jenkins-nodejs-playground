const sh = require('shelljs');
const package_helper = require('./package.js');

module.exports = function(command, payload) {
	if (!package_helper.exists()) {
		sh[command](payload);
	}
}
