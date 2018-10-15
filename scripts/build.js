const {runWhenNewHash} = require('./helpers/runner.js');

runWhenNewHash('exec', 'npm run populate');
runWhenNewHash('exec', 'npm run build');
runWhenNewHash('exec', 'mv server/package.json.deploy server/package.json');
runWhenNewHash('exec', 'cd server/ && npm i');

