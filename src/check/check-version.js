const semver = require('semver');
const chalk = require('chalk');
const axios = require('axios');
const { fatal, success, log } = require('../helper/logger');
const packageConfig = require('../package.json');

module.exports = done => {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, packageConfig.engines.node)) {
    return console.log(chalk.red(
      '  You must upgrade node to >=' + packageConfig.engines.node + '.x to use aurorafe-cli'
    ))
  }

  axios({
    url: 'https://registry.npmjs.org/aurorafe-cli',
    method: 'get',
    timeout: 1000
  }).then((res) => {
    if (res.status === 200) {
      const latestVersion = res.data['dist-tags'].latest;
      const localVersion = packageConfig.version;
      if (semver.lt(localVersion, latestVersion)) {
        log(chalk.yellow('  A newer version of aurorafe-cli is available.'));
        log();
        log('  latest:    ' + success(latestVersion));
        log('  installed: ' + fatal(localVersion));
        log('  update aurorafe-cli latest: npm update -g aurorafe-cli ');
        log()
      }
      done();
    }
  }).catch((err) => {
    if (err) {
      fatal('The cli version check error');
      done();
    }
  });
};
