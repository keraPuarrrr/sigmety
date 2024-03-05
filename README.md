# sigmety

A simple logger package for Node.js applications.

## Installation

You can install `sigmety` using npm:

```bash
npm install sigmety
```

## Usage

```javascript
const logger = require('sigmety');

logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
```

## Configuration

By default, the logger will log messages with the level set to 'info'. You can change the log level using the `setLogLevel` method:

```javascript
logger.setLogLevel('warn'); // Set log level to 'warn'
```

The available log levels are: `info`, `warn`, and `error`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
