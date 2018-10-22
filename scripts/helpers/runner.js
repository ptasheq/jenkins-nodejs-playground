const sh = require('shelljs');
const package_helper = require('./package.js');

sh.config.fatal = true;
const {SECRET_SSH_KEY, DEPLOY_TO, PORT, USERNAME} = process.env;

function runWhenNewHash(command, payload) {
	if (!package_helper.exists()) {
		run(command, payload);
	}
}

function run(command, payload) {
	if (command === 'ssh_exec') {
		sh.exec(`ssh -i ${SECRET_SSH_KEY} -p ${PORT} ${USERNAME}@${DEPLOY_TO} "${payload}"`)
	}
	else if (command === 'exec') {
		sh.exec(payload);
	}
	else {
		sh[command](...payload);
	}
}

module.exports = { runWhenNewHash, run }
