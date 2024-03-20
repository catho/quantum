const { execSync } = require('child_process');

execSync('yarn cross-env NODE_ENV=jest yarn build:css');
