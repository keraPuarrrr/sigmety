// logger.js

class Logger {
  constructor() {
    this.logLevel = 'info'; // default log level
  }

  setLogLevel(level) {
    this.logLevel = level.toLowerCase();
  }

  log(message, level = 'info') {
    const allowedLevels = ['info', 'warn', 'error'];

    // Check if the provided log level is allowed
    if (!allowedLevels.includes(level)) {
      console.warn(`Invalid log level "${level}". Defaulting to "info".`);
      level = 'info';
    }

    // Check if the log level is allowed to be logged
    if (allowedLevels.indexOf(level) >= allowedLevels.indexOf(this.logLevel)) {
      console[level](message);
    }
  }

  info(message) {
    this.log(message, 'info');
  }

  warn(message) {
    this.log(message, 'warn');
  }

  error(message) {
    this.log(message, 'error');
  }
}

module.exports = new Logger();
