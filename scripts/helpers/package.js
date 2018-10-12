const sh = require('shelljs');
const fs = require('fs');

const hash = sh.exec('git rev-parse HEAD', {silent:true}).stdout;
const path = `/var/tmp/react-backoffice-client-${hash}.tar.bz2`;

module.exports = {
	path,
	exists: () => fs.existsSync(path),
}
