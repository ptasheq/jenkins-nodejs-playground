const package_helper = require('./helpers/package.js');
const {run, runWhenNewHash} = require('./helpers/runner.js');
const {SECRET_SSH_KEY, DEPLOY_TO, PORT, USERNAME} = process.env;
const DEST_PATH = '/var/www/backoffice-react-client'

// runWhenNewHash('exec', `tar -jcvf ${package_helper.path} build/ server/ mock-api-data.json`);
runWhenNewHash('exec', `tar -jcvf ${package_helper.path} b.txt`);
// run('ssh_exec', `rm -rf ${DEST_PATH}/*`);
run('exec', `scp -i ${SECRET_SSH_KEY} -P ${PORT} ${package_helper.path} ${USERNAME}@${DEPLOY_TO}:/var/tmp`);
run('ssh_exec', `sudo chown orwellg:orwellg ${package_helper.path} && sudo tar -xvvf ${package_helper.path} -C ${DEST_PATH} && sudo rm ${package_helper.path}`)
run('ssh_exec', "sudo systemctl restart app-mock-backend");
