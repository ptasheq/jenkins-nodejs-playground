const sh = require('shelljs');
const fs = require('fs');

const hash = sh.exec('git rev-parse HEAD', {silent:true}).stdout.trim();
const name = `react-backoffice-client-${hash}.tar.bz2`;
const path = `/var/tmp/${name}`;

module.exports = {
	name,
	path,
	exists: () => fs.existsSync(path),
}
