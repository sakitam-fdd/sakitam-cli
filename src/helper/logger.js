const chalk = require('chalk');
const format = require('util').format;

const logError = message => {
  console.log(chalk.red(message));
  process.exit(1);
};

const logSuccess = (...message) => {
  const msg = format.apply(format, message);
  console.log(chalk.green(msg))
};

const logTip = (...message) => {
  const msg = format.apply(format, message);
  console.log(chalk.gray(msg));
};

module.exports = {
  fatal: logError,
  success: logSuccess,
  log: logTip
};
