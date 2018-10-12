const runWhenNewHash = require('./helpers/run_when_new_hash.js');

runWhenNewHash('exec', 'echo ' + process.env.SECRET_SSH_KEY);

